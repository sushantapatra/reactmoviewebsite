import React from 'react'
import { useGloabalContext } from './context'


const Search = () => {
    const { query, setQuery, isError } = useGloabalContext()
    return (
        <>
            <div className="col-md-6 mx-auto">
                <h2>Search Your Favority Query</h2>
                <form action="#" method="get" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="query" placeholder='Search your favority movies' value={query} onChange={(e) => setQuery(e.target.value)} />
                </form>
                <div>
                    <p>{isError.show && isError.msg}</p>
                </div>
            </div>
        </>
    )
}

export default Search