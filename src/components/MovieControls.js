import React from 'react'
import { db } from '../firebase_config'

export const MovieControls = ({ movie }) => {
    
    const deleteMovie = () => {
        db.collection("moviedb").doc(movie.id).delete();
    }

    return (
        <div className="inner-card-controls">
            <button className="ctrl-btn" onClick={deleteMovie}>X</button>
        </div>
    )
}
