import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year')).json();

    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : <div>{movies.map((item, index) => (
        <div key={item.id}>
          <img src={item.medium_cover_image} alt={item.title} />
          <h2>{item.title}</h2> 
          <p>{item.summary}</p>
          <ul>
            {item.genres.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>
      ))}</div>}
    </div>
  );
}

export default App;
