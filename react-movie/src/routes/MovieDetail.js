import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../scss/MovieDetail.module.scss";

const MovieDetail = () => {
  const {id} = useParams();

  const [movieData, setMovieData] = useState({});

  const getMovieInfo = async () => {
    const allData = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setMovieData(allData.data.movie);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  console.log(movieData);

  return (
    <div className={`pad-inline ${style.moviedetail}`}>
      <h3>{movieData.title} ({movieData.year})</h3>
      <figure>
        <img src={movieData.large_cover_image} alt={movieData.title} />
      </figure>
      <div>
        <strong>Genres</strong> :  <br />
        <strong>Rating</strong> : {movieData.rating} <br />
        <strong>Language</strong> : {movieData.language} <br />
        <strong>RunTime</strong> : {movieData.runtime} minutes <br />
        <p className="description">{movieData.description_full}</p>
      </div>
    </div>
  )
}

export default MovieDetail;
