import '../css2/Favorites.css'
import { usemovieContext } from '../context/MovieContext'
import MovieCard from '../Components/MovieCard'
function Favorites(){
    const {favorites}=  usemovieContext();
    if(favorites){
        return   <div className="favorites">
            <h2>Your Favorites</h2>
        <div className="movies-grid">
        {favorites.map(movie =>
             <MovieCard movie={movie}
                key={movie.id}></MovieCard>)}
    </div>
    </div>
    }

    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet </h2>
            <p> start adding movies to your favorites</p>
        </div>
    )
}
export default Favorites

