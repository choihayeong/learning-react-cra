
import style from '../scss/MovieHome.module.scss';
import MovieList from '../components/MovieList';

const Home = () => {

  return (
    <div className={style.home}>
      <MovieList />
    </div>
  );
}

export default Home;
