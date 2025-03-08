import React from 'react';
import MovieCard from '../Components/MovieCard.jsx';
import { useState, useEffect } from 'react';
import '../css2/Home.css'
import { searchMovies, getPopularMovies } from '../source/api.js';

const Home = () => {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies]=  useState([]);
    const [error, setError]= useState(null);
    const [loading, setLoading]= useState(true)
 
    useEffect(()=>{
        const loadPopularMovies= async ()=>{
            try{
                const popularMovies= await getPopularMovies();
                setMovies(popularMovies);
            }catch(err){
                console.log(err) 
                setError("Failed to Load movies...")
                
          }
          finally{
            setLoading(false)
          }
        }
        loadPopularMovies();
    },[])
    
     async function handleSearch(e) {
        e.preventDefault()
      if(!searchQuery.trim()) return
      if(loading) return 

      setLoading(true);

      try{
        const searchResults= await searchMovies(searchQuery)
        setMovies(searchResults);
       setError(null)
      }
      catch(err){
        setError("Failed to Search for movie...")
        console.log(err)
      }
      finally{
        setLoading(false)
      }

        setsearchQuery("")
    }
  

    return (
        <div className="home">
            <form onSubmit={handleSearch} className='search-form'>
                <input type="text"
                    placeholder='search for movies'
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setsearchQuery(e.target.value)} />

                <button className="search-button"
                    type='submit'>search</button>
            </form>

            {error &&   <div className="error-message">{error}</div>} 
            {loading? (<div className="loading">Loading...</div>): 
            (<div className="movies-grid">
            {movies.map(movie =>
                 <MovieCard movie={movie}
                    key={movie.id}></MovieCard>)}
        </div>)} 

            
        </div>
    );
};  

export default Home;