import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const [movieData, setMovieData] = useState({});
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

        setMovieData(json.data.movie);
        console.log(json.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <section>
            <h2>Movie Detail for {movieData.title}</h2>
            <Link to='../'>Back</Link>
            <div className="movie-detail">
                <img src={movieData.large_cover_image} alt={movieData.title} />
                <h3>{movieData.title}</h3>
                {/* <ul>
                    {movieData.genres.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul> */}
                <ul className="movie-detail__info">
                    <li>
                        <strong>Rating</strong>: 
                        {movieData.rating}
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
    );
}

export default Detail;