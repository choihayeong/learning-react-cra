import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "../scss/MovieDetail.module.scss";
import Skeleton from "../components/Skeleton";
import MovieDetailItem from "../components/MovieDetailItem";

const MovieDetail = () => {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState({});

  const getMovieInfo = async () => {
    const allData = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setMovieData(allData.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <div className={`pad-inline ${style.moviedetail}`}>
      {loading ? <Skeleton /> : <MovieDetailItem detailData={movieData} />}
    </div>
  )
}

export default MovieDetail;
