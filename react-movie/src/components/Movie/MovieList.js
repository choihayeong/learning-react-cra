import style from "@/scss/MovieList.module.scss";
import MovieListItem from "./MovieListItem";

const MovieList = (prop) => {
  const { movieArr } = prop;

  return (
    <ul className={style.movielist}>
      {movieArr.map((item, index) => (
        <MovieListItem 
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
