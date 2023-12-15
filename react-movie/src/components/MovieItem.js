import PropTypes from 'prop-types';
import style from "../scss/MovieItem.module.scss";
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
  const { title, cover_image, summary, genres, url } = props;

  return (
    <li className={style.movieitem}>
      <figure>
        <img src={cover_image} alt={title} />
      </figure>

      <div className={style.movieinfo}>
        <h3>
          <Link to={`/movie/${url}`}>{title}</Link>
        </h3>
        <p>{summary}</p>
        <ul className={style.genres}>
          {genres.map((item, index) => (
            <li key={index}>#{item}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default MovieItem;

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  cover_image: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.number.isRequired,
};
