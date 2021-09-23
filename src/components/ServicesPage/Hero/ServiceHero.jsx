import React from 'react'
import "./ServiceHero.scss";
import { Button, Grid } from "@material-ui/core";
import Akhil from '../../../assets/Images/akhil.jpg'
import Nitin from '../../../assets/Images/nitin.jpg'
import Prakash from '../../../assets/Images/prakash.jpg'
import { Link } from 'react-router-dom';

export const ServiceHero = () => {
    return (
        <div className="services-hero">
            <div className="heading">Services</div>
            <div className="content">
                <h1>Introduction</h1>
                <p>
                    <strong>DigiBros</strong> is a one-stop digital marketing company for all your needs. We have a young
                    and talented team with great enthusiasm and creativity who can help your business fit
                    into this modern Era. We help you with all your marketing needs - SEO, SEM, SMM,
                    Email Marketing, Content Marketing, Graphic Designing and Posters & Brochures
                    etc.
                </p>
                <p>
                    We offer a service tailored to each client's budget and requirements with a team of
                    experts who are passionate about what they do. We’ll see you through every step of the
                    way - from getting you results to achieving your goals.
                </p>

                <p>
                    You'll never have to worry about whether or not we can provide services for your needs -
                    because we can! We can handle all of your website needs from design to development
                    and everything in between as well as offer full-service digital marketing services
                </p>
                <br />
                <h1>Our Team</h1>
                <p>
                    We are the “Believers of creating profitable trends in your market” & we won’t stop
                    working until we make it happen.
                </p>

                <p>
                    We help you with every step of your marketing journey: from getting your website
                    ranked on Google to developing an effective content strategy that generates leads. In
                    short - we do everything.<br /><br />
                    We are the best choice for your business
                </p>
                <Button className="btn" variant="contained" color="primary" disableElevation>Get A Quote</Button>
                <br /><br />
                <p>
                    Don't let your competitors beat you! Improve your
                    online presence with our digital marketing services!

                </p>

            </div>
        </div>
    )
}
