import React from 'react'
import { Navbar, ServiceContent, ServiceHero, Footer } from '../components';
import './pages.scss'

export const ServicesPage = () => {
    return (
        <div>
            <Navbar variant="dark" />
            <ServiceHero />
            {/* <AboutContent /> */}
            <Footer />
        </div>
    )
}
