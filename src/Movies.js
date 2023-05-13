import React from 'react'
import { Link } from 'react-router-dom'

import { useGloabalContext } from './context'

const Movies = () => {
    const { movie, isLoading } = useGloabalContext()

    if (isLoading) {
        return (
            <div className="col col-md-3 mx-auto"> <p className='text-danger'>loading...</p></div>
        )
    }


    return (
        <>
            {
                movie.map((curMovie, index) => {
                    const movieTitle = curMovie.Title.substring(0, 15)
                    return (
                        <div className="col col-md-3" key={index}>
                            <Link to={`/movie/${curMovie.imdbID}`} >
                                <div className="card" >
                                    <img src={curMovie.Poster} className="card-img-top" alt={curMovie.Title} />
                                    <div className="card-body">
                                        <h3 className="card-title">{movieTitle.length >= 15 ? `${movieTitle} ...` : movieTitle}</h3>
                                        <p className="card-text">{curMovie.Year}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    )
                })
            }
        </>

    )
}

export default Movies