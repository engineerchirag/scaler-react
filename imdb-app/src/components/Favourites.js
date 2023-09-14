import { useEffect, useState, useCallback, useMemo, useContext } from "react";
import { FavouriteContext } from "../context/favourite";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedGenreId, setFavouriteList, setSearchedFavourites } from './../store/favouriteReducer';

let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

const Favourites = () => {

    const { favourites, selectedGenreId, favouriteList, searchedFavourites } = useSelector((state) => state.favourites);
    const dispatch = useDispatch();
    
    const genres = useMemo(() => Array.from(new Set(favourites.map(favourite => favourite.genre_ids[0]))), [favourites]);

    const handleSearch = useCallback( (e) => {
        const searchText = e.target.value;
        dispatch(setFavouriteList({ type: 'SEARCH', searchText }));
    }, []);

    const handleSort = useCallback((sortType) => {
        dispatch(setFavouriteList({ type: 'SORT', sortType }));
    }, []);


    const filterFavourites = useCallback(() => {
        dispatch(setSearchedFavourites());
        dispatch(setFavouriteList({ type: 'CATEGORY' }));
    }, []);

    useEffect(() => {
        filterFavourites();
    }, [selectedGenreId]);

    return (
        <div className="favourite-page">
            <h1>Favourites</h1>
            <div className="wrapper">
                <div className="left-section">
                    <div className="genres-wrapper">
                        <ul>
                            <li className={!selectedGenreId ? 'selected' : ''} onClick={() => { dispatch(setSelectedGenreId()); }}> All Genres</li>
                            {genres?.map(genreId => {
                                return (<li className={selectedGenreId === genreId ? 'selected' : ''} onClick={() => { dispatch(setSelectedGenreId(genreId));}}>{genreids[genreId]}</li>)
                            })}
                        </ul>
                    </div>
                </div>
                <div className="right-section">
                    <input type="search" onChange={handleSearch} placeholder="Search by title"/>
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th><span onClick={() => handleSort(true)}>^</span>Popularity<span onClick={() => handleSort(false)}>v</span></th>
                                <th>Rating</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                favouriteList?.map(favourite => {
                                    return (
                                        <tr>
                                            <td><img width="60px" src={`https://image.tmdb.org/t/p/original${favourite.poster_path}`} /></td>
                                            <td>{favourite.title}</td>
                                            <td>{genreids[favourite.genre_ids[0]]}</td>
                                            <td>{favourite.popularity}</td>
                                            <td>{favourite.vote_average}</td>
                                            <td><button>Delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                            
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Favourites;