import React, { Component } from 'react'
import { Navbar, Hero, About, Services, Contact } from './components';


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
            <Services />
            <Contact />
        </>
    )
}
export default App;


