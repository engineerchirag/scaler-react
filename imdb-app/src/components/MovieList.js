import MovieCard from "./MovieCard";
import { useState, useEffect } from 'react';
import Pagination from "./Pagination";
// import { movies as movieData } from '../mockData/movieData';
import { useSelector, useDispatch } from 'react-redux';
import { setMoviePageStore } from "../store/productReducer";

const MovieList = () => {

    const { activePage, moviePageStore } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const fetchMovieData = () => {
        const pageWiseMovie = moviePageStore[activePage];
        if (!pageWiseMovie) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0b5415eb9bf023d556ef265b425e0e4a&language=en-US&page=${activePage}`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setMoviePageStore(data));
                });
        }
    }

    useEffect(() => {
        fetchMovieData();
    }, [activePage]);

    return (
        <div className="movie-list">
            {
                moviePageStore?.[activePage]?.results?.map((movie) => {
                    return (<MovieCard movie={movie} />);
                })
            }
            {
                moviePageStore?.[activePage]?.total_pages && (
                    <Pagination totalPages={moviePageStore?.[activePage]?.total_pages}/>
                )
            }
        </div>
    )
}

export default MovieList;