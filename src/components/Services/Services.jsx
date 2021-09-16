import React from "react";
import "./Services.scss";

import { Button, Grid, Typography } from "@material-ui/core";

export const Services = () => {
    return (
        <div className="services">
            <div className="title">
                <div className="main">
                    our premiere services
                </div>
                <div className="sub">
                    digibros offers you all the digital solutions with our specialized
                    team of experts
                </div>
            </div>
            <Grid container className="cards-grid">

                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-money-check" /></div>
                        <div className="title">Web Designing</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-shopping-cart" /></div>
                        <div className="title">E-Commerce</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SEO</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SEM</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SMM</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-bullhorn" /></div>
                        <div className="title">Content Marketing</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-mail-bulk" /></div>
                        <div className="title">Email Marketing</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-object-ungroup" /></div>
                        <div className="title">Graphic Designing</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-edit" /></div>
                        <div className="title">Poster & Brochures</div>
                        <a href="#" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></a>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
