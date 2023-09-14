import { Link } from "react-router-dom";
import { FavouriteContext } from "../context/favourite";
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { setFavouries } from "../store/favouriteReducer";

const MovieCard = ({ movie  }) => {
    const dispatch = useDispatch();
    const handleFavouriteClick = () => {
        dispatch(setFavouries(movie));
    }
    return (
        <div className="movie-card" style={ {backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`} }>
            <h3><Link to={`/detail/${movie.id}`}>{movie.title}</Link></h3>
            <button onClick={handleFavouriteClick} >Add To Favourites</button>
        </div>
    )
}

export default MovieCard;