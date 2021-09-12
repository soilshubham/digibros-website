import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import './About.scss'
export class About extends Component {
    render() {
        return (

            <>
                <div className="dummy"></div>
                <div className="about-section-container">
                    <Grid container className="about-section-grid">
                        <Grid item md={6} className="grid-left">
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                                molestias eligendi, quod dolore vel harum commodi. Minima qui sed
                                quia omnis, asperiores libero quod, eaque officia, quos et
                                recusandae quas.
                            </div>
                        </Grid>
                        <Grid item md={6} className="grid-right">
                            <div>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
                                molestias eligendi, quod dolore vel harum commodi. Minima qui sed
                                quia omnis, asperiores libero quod, eaque officia, quos et
                                recusandae quas.
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default About;
