import React from 'react'
import './pages.scss'

import { Navbar, AboutHero, AboutContent, Footer } from '../components';

export const AboutPage = () => {
    return (
        <>
            <Navbar variant="dark" />
            <AboutHero />
            {/* <AboutContent /> */}
            <Footer />
        </>
    )
}
