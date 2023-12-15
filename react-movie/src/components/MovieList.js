import { useState, useEffect } from 'react';
import style from "../scss/MovieList.module.scss";
import Skeleton from "./Skeleton";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movieArr, setMovieArr] = useState([]);
  const getMovies = async() => {
    const allData = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=like_count&with_rt_ratings=1')).json();
    // https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
    // https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=like_count
    // https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=download_count
    setMovieArr(allData.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movieArr);

  return (
    <ul className={style.movielist}>
      {loading ? <Skeleton /> : movieArr.map((item, index) => (
        <MovieItem 
          key={item.id} 
          url={item.id}
          title={item.title} 
          summary={item.summary}
          cover_image={item.medium_cover_image}
          genres={item.genres}
        />
      ))}
    </ul>
  );
}

export default MovieList;
