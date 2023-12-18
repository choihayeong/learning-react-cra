
import { useEffect, useState } from 'react';
import style from '../scss/MovieHome.module.scss';
import Skeleton from "../components/Skeleton";
import SelectBox from '../components/SelectBox';
import MovieList from '../components/MovieList';

const Home = () => {
  const [ratings, setRatings] = useState(8.8);
  const getMinimumRatings = (ele) => {
    setRatings(ele.target.value);
  };

  const [sortValue, setSortValue] = useState("");
  const getSortValue = (ele) => {
    setSortValue(ele.target.value);
  };

  const [loading, setLoading] = useState(true);

  const [allMovies, setAllMovies] = useState([]);
  const getMovies = async () => {
    const allData = await (await fetch(`https://yts.mx/api/v2/list_movies.json?with_rt_ratings=1&sort_by=${sortValue}&minimum_rating=${ratings}`)).json();

    setAllMovies(allData.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, [sortValue, ratings]);

  return (
    <div className={style.home}>
      <input 
        type="range" 
        max={9} 
        min={0} 
        step={0.1} 
        value={ratings} 
        onChange={getMinimumRatings} 
      />
      {ratings}

      <SelectBox value={sortValue} onChange={getSortValue}>
        <option value="">All</option>
        <option value="year">Year</option>
        <option value="like_count">Likes</option>
        <option value="download_count">Downloads</option>
      </SelectBox>

      {loading ? <Skeleton /> : <MovieList movieArr={allMovies} />}
    </div>
  );
}

export default Home;
