import React from 'react'
import { useGloabalContext } from './context'

import Search from './Search'
import Movies from './Movies'

const Home = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <Search />
                </div>
            </div>
            <div className="row">
                <Movies />
            </div>
        </>
    )
}

export default Home