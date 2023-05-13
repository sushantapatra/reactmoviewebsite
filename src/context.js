import React, { useContext, useEffect, useState } from 'react'


const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext()

let timer;
const deboune = (fnc, dealy) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(fnc, dealy)
}

//we need to create a provider fun
const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [isError, setIsError] = useState({ show: false, msg: "" })
    const [query, setQuery] = useState('titanic')

    const getMovies = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            if (data.Response === 'True') {
                setIsLoading(false)
                setMovie(data.Search)
                setIsError({ show: false, msg: '' })
            } else {
                setIsError({ show: true, msg: data.error })
            }
        } catch (error) {
            console.log(error);
        }
    }



    useEffect(() => {
        // const timeOut = setTimeout(() => {
        //     getMovies(`${API_URL}&s=${query}`)
        // }, 3000)
        // return clearTimeout(timeOut)
        deboune(() => {
            getMovies(`${API_URL}&s=${query}`)
        }, 3000)

    }, [query])
    return <AppContext.Provider value={{ isLoading, movie, isError, query, setQuery }}>{children}</AppContext.Provider>
}

//Global custom hook
const useGloabalContext = () => useContext(AppContext)

export { AppContext, AppProvider, useGloabalContext }


