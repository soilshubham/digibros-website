import React, { Component } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Lottie from 'react-lottie';
import laptopManAnimation from '../../assets/Lottie/laptopMan.json'
import './About.scss'
export class About extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: laptopManAnimation,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
        return (
            <>
                <div className="dummy"></div>
                <div className="about-section-container">
                    <Grid container className="about-section-grid">
                        <Grid item md={6} className="grid-left">
                            <Lottie isClickToPauseDisabled={true} options={defaultOptions} />

                        </Grid>
                        <Grid item md={6} className="grid-right">
                            <div className="title" >What Is DigiBros?</div>
                            <p className="content">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                                molestias eligendi, quod dolore vel harum commodi. Minima qui sed
                                quia omnis, asperiores libero quod, eaque officia, quos et
                                recusandae quas. Lorem, ipsum dolor sit amet consectetur adipisicing
                                elit. Libero deleniti adipisci eos? Nesciunt, molestias molestiae eius
                                dolores iure itaque nihil?
                            </p>
                            <p className="content">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                                molestias eligendi, quod dolore vel harum commodi. Minima qui sed
                                quia omnis, asperiores libero quod, eaque officia, quos et
                                recusandae quas.
                            </p>
                            <Button className="btn" variant="contained" color="primary" disableElevation>About Us</Button>
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default About;
