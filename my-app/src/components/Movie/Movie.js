import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../assets/scss/Movie.module.scss';

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className={styles.moviebox}>
            <div className={styles.moviebox__thumbnail}>
                <img src={coverImg} alt={title} />
            </div>
            
            <div className={styles.moviebox__info}>
                <h2 className={styles.moviebox__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2> 
                <p className={styles.moviebox__description}>
                    {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
                </p>
                <ul className={styles.moviebox__genres}>
                    {genres.map((item, index) => (<li key={index}>{`#${item}`}</li>))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;