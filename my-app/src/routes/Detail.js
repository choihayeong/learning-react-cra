import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import styles from '../assets/scss/Detail.module.scss';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setMovieData(json.data.movie);
        setLoading(false);

        console.log(json);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div className={styles.wrap}>
            {loading ? <Loading /> : 
            <div className="container">
                <div className={styles.content}>
                    <section className="content__wrap movieview">
                        <div className={styles.movieview__header}>
                            <h2 class={styles.movieview__title}>
                                Movie Detail for <br /> 
                                <strong>{movieData.title}</strong>
                            </h2>
                            <Link to='../' className={styles.historyback}>Back</Link>
                        </div>
                        <div className="movieview__content">
                            <figure className={styles.movieview__thumbnail}>
                                <img src={movieData.large_cover_image} alt={movieData.title} />
                            </figure>
                            <h3 className={styles.movieview__contentTitle}>
                                {movieData.title}
                            </h3>
                            <p>
                                {movieData.description_intro}
                            </p>
                            {/* <ul>
                                {movieData.genres.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul> */}
                            <ul className="movie-detail__info">
                                <li>
                                    <strong>Rating</strong>: 
                                    <span>{movieData.rating}</span>
                                    {Math.round(movieData.rating) / 2}
                                </li>
                                <li>
                                    <strong>Released Date</strong>: 
                                    {movieData.date_uploaded}
                                </li>
                                <li>
                                    <strong>Language</strong>: 
                                    {movieData.language}
                                </li>
                            </ul>
                            <div className="movie-bg">
                                <img src={movieData.background_image_original} alt={movieData.title} />
                            </div>
                        </div> 
                    </section>
                </div>
            </div>}
        </div>
    );
}

export default Detail;