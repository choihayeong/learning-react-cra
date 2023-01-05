import { useState, useEffect } from 'react';
import Movie from '../components/Movie/Movie';
import Loading from "../components/common/Loading";
import styles from '../assets/scss/Home.module.scss';

function Home() {
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

    return (
        <div className={styles.wrap}>
            {loading ? <Loading /> : <div className="container">
                <div className={styles.row}>
                    <div className={styles.content}> 
                    {movies.map((item, index) => (
                        <Movie 
                            key={item.id}
                            id={item.id}
                            coverImg={item.medium_cover_image} 
                            title={item.title} 
                            summary={item.summary} 
                            genres={item.genres}  
                        />
                    ))}
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Home;