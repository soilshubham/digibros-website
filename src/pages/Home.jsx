import React from 'react'
import './pages.scss'

import { Navbar, Hero, About, Services, Contact, Footer } from '../components';

export const Home = () => {
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
