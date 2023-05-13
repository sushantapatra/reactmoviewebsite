import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

import { useGloabalContext } from './context'
const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const SingleMovie = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState({ show: false, msg: "" })
    const [movie, setMovie] = useState([])

    const getMovies = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (res.statusText === 'OK') {
                setIsLoading(false)
                setMovie(data)
            } else {
                setIsError({ show: true, msg: data.error })
            }
        } catch (error) {
            console.log(error);
        }
    }
    let timer;
    const deboune = (fnc, dealy) => {
        if (timer) clearTimeout(timer)
        timer = setTimeout(fnc, dealy)
    }
    useEffect(() => {
        deboune(() => {

        }, 300)
        getMovies(`${API_URL}&i=${id}`)
    }, [id])

    console.log(movie);
    if (isLoading) {
        return (
            <p>loading...</p>
        )
    }

    return (
        <div className='col col-md-8 mx-auto my-4'>
            <div className="row">
                <div className="col-md-4">
                    <img src={movie.Poster} className="img-fluid" alt="" />
                </div>
                <div className="col-md-8">
                    <h3>Title : {movie.Title}</h3>
                    <p>Released : {movie.Released}</p>
                    <p>Actors : {movie.Actors}</p>
                    <p>Director : {movie.Director}</p>
                    <p>Genre : {movie.Genre}</p>
                    <p>Rating : {movie.imdbRating}</p>
                    <p>{movie.Plot}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleMovie