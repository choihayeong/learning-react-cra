import { useEffect, useState, useCallback } from 'react';
import style from "@/scss/MovieHome.module.scss";
import Skeleton from "@/components/Skeleton";
import MovieList from "@/components/Movie/MovieList";
import MovieHomeHeader from "@/components/Movie/MovieHomeHeader";

const Home = () => {
  const [ratings, setRatings] = useState(8.8);
  const getMinimumRatings = (ele) => {
    setRatings(ele.target.value);
  };

  const [sort, setSort] = useState("");
  const getSortValue = (ele) => {
    setSort(ele.target.value);
  };

  const [loading, setLoading] = useState(true);

  const [allMovies, setAllMovies] = useState([]);
  const getMovies = async () => {
    const allData = await (await fetch(`https://yts.mx/api/v2/list_movies.json?with_rt_ratings=1&sort_by=${sort}&minimum_rating=${ratings}`)).json();

    setAllMovies(allData.data.movies);
    setLoading(false);
  };

  /* const getMovies = useCallback(async () => {
    const allData = await (await fetch(`https://yts.mx/api/v2/list_movies.json?with_rt_ratings=1&sort_by=${sort}&minimum_rating=${ratings}`)).json();

    setAllMovies(allData.data.movies);
    setLoading(false);
  }, [sort, ratings]); */

  useEffect(() => {
    getMovies();
  }, [sort, ratings]);

  return (
    <div className={style.home}>
      <MovieHomeHeader 
        classes={style.home__header}
        ratingsValue={ratings} 
        sortValue={sort}
        handleRatings={getMinimumRatings} 
        handleSorting={getSortValue}
      />

      {loading ? <Skeleton /> : <MovieList movieArr={allMovies} />}
    </div>
  );
}

export default Home;
