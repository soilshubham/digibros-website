import React, { Component } from 'react'
import { Navbar, Hero, About } from './components';


import './App.scss'


const App = () => {
    return (
        <>
            <div className="body">
                <Navbar />
                <Hero />
            </div>
            <div className="about">
                <About />
            </div>
        </>
    )
}
export default App;


