import React from 'react'
import './Contact.scss'

import { Button, Grid, Typography } from "@material-ui/core";


export const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">

                <Grid container className="title-grid">
                    <Grid item xs={12} className="title">
                        <h2>Get In Touch</h2>
                        <p>
                            Interested to Explore More? Book a FREE One-hour Consultation with
                            Our Experts and transpire a complete Digital Marketing Strategy
                            for You.
                        </p>
                    </Grid>
                </Grid>
                <Grid container className="contact-grid">
                    <Grid item md={4} xs={12} className="grid-item phone">
                        <a href=""> <i className="fas fa-phone-alt" />&nbsp;+91 9080694955 </a>
                        <a href=""> <i className="fas fa-phone-alt" />&nbsp;+91 9080694955 </a>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <a href=""><i className="fas fa-envelope" />&nbsp;info@digibros.in</a>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <a
                            className="btn"
                            href="./services.html"
                        >
                            <i className="fas fa-paper-plane" />&nbsp;Get A Quote
                        </a>
                    </Grid>
                </Grid>
                <Grid container className="contact-sub-grid">
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className=""> (Call Us To Get Started) </i>
                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className=""> (Mail Us To Get Started) </i>

                    </Grid>
                    <Grid item md={4} xs={12} className="grid-item">
                        <i className="">
                            (Book Now To Get Started)
                        </i>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
