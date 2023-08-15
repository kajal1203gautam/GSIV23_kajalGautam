import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { getProduct } from '../services/api';



const Details = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const loadProduct = async () => {
            const result = await getProduct(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
            setProduct(result)
        
     
    }

    useEffect(() => {
        loadProduct()
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h5>Movie Details</h5>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/"> <a className="nav-link active" aria-current="page">  <i className="material-icons">home</i></a>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
            <div className="container-fluid pt-4">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={`https://image.tmdb.org/t/p/w500/${product?.backdrop_path}`} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex">
                                        <h5 className="card-title pe-3">{product?.original_title}</h5>
                                        <p>{product?.vote_average} <i className="material-icons star_icon">star</i></p>
                                        </div>
                                        <p>2020 | {product?.runtime}Minute | Director</p>

                                        <p className="card-text">{product?.overview} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Details