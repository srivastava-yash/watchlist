import React from 'react';
import { db } from '../firebase_config';

export const ResultCard = ({movie}) => {
    
    const addMovie = () => {
        console.log(`${movie.poster_path}`);
        db.collection("moviedb").add({
            image: movie.poster_path,
            movieid: movie.id,
            title: movie.title,
            year: parseInt(movie.release_date.substring(0,4))
        });
    }
    
    return (
        <div className="result-card">
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                    alt={`${movie.title} Poster`}
                    />
                ) : (
                <div className="filler-poster"></div>
                )}
            </div>
            <div className="info">
                <div className="header">
                    <h3 className="title">{movie.title}</h3>
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0,4) : ""}</h4>
                </div>

                <div className="controls">
                    <button className="btn" onClick = {addMovie}>
                        Add to Watchlist
                    </button>
                </div>
            </div>
        </div>
    )
}
