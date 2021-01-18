import React from 'react';
import {MovieControls} from './MovieControls';

export const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="overlay">

            </div>
            {movie.image ? (
                <img src={`https://image.tmdb.org/t/p/w200${movie.image}`} 
                alt={`${movie.title} Poster`}
                />
            ) : (
            <div className="filler-poster"></div>
            )}
            <MovieControls movie={movie} />
        </div>
    )
}
