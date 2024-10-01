import React from 'react'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="container"><Programs></Programs></div>

        </div>
    )
}

export default App
