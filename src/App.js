import React, { Component } from 'react'
import { Navbar, Hero, About, Services, Contact, Footer } from './components';


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
            <Footer />
        </>
    )
}
export default App;


