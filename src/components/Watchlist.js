import React, {useState} from 'react'
import { db } from '../firebase_config';
import { MovieCard } from './MovieCard';

export const Watchlist = () => {
    
    const [movielist,setMovieList] = useState([]);

    db.collection("moviedb").onSnapshot(function (querySnapshot) {
        setMovieList(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                mid: doc.data().movieid,
                title: doc.data().title,
                year: doc.data().year,
                image: doc.data().image,
            }))
        );
    });
    
    return (
        <div className="movie-page">
           <div className="container">
                <div className="header">
                   <h1 className="heading">Our WatchList</h1>  
                </div>

                {movielist.length > 0 ? (
                <div className="movie-grid">
                    {movielist.map(movie => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                    <h2 className="no-movies">No Movies to watch. Add some!!</h2>
                )}
           </div> 
        </div>
    )
}
