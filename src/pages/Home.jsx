
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'
import { getServices } from '../services/api'


const Home = () => {
    const [movies, setMovies] = useState([])
    const [backUpMovie, setBackUpMovie] = useState([])
    
    const [searchValue, setSearchValue] = useState("")

    
    // if(movies && movies.length>0){
    //     setBackUpMovie(JSON.parse(JSON.stringify(movies)))
    // }
    const handleSearch  = ()=>{
        
        // setSearchValue(searchMovie)
        // if(searchValue){
        //     const filteredMovies = movies.filter((item)=> item.original_title.includes(searchValue));
        //     setMovies(filteredMovies)
        // }else{
        //     setMovies(backUpMovie) 
        // }
    }
    const loadMoivies = async () => {
        const movieList = await getServices()
        setMovies(movieList)
    }

    useEffect(() => {
        loadMoivies();

    }, [])
    return (
        <>
            <Header setSearchValue={setSearchValue} handleSearch={handleSearch}   />
            <div className="container-fluid pt-5">
                <div className="row new_row">
                    {
                        movies && movies.length > 0 && movies.slice(0,movies.length-2).map((movie) => {
                            return (
                                <div className="col-sm-2 col-sm-offset-1" key={movie.id}>
                                    <MovieCard data={movie}  />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

        </>
    )
}

export default Home