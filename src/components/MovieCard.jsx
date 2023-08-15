import React from 'react'
import { Link } from "react-router-dom";

const MovieCard = ({data}) => {
    const {original_title,id,vote_average,overview,backdrop_path } = data;
    return (
        <>
         <Link to={`/details/${id}`} className='style-none'>
            <div className="card movie_card mt-3">
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top" alt={original_title} />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                    <h6 className="card-title">{original_title} </h6>
                    <p>  {vote_average}  <i className="material-icons star_icon">star</i></p>
                    </div>
                    <p className="card-text txt">{overview.substring(0,40)+"..."} </p>
                </div>
            </div>
            </Link>
        </>
    )
}

export default MovieCard