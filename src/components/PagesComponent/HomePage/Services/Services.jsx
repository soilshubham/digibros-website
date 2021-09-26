import React from "react";
import "./Services.scss";

import { Button, Grid, Typography } from "@material-ui/core";
import { HashLink } from 'react-router-hash-link';

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
                        <HashLink smooth to="/services#wd-01" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-shopping-cart" /></div>
                        <div className="title">E-Commerce</div>
                        <HashLink smooth to="/services#wd-02" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SEO</div>
                        <HashLink smooth to="/services#m-01" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SEM</div>
                        <HashLink smooth to="/services#m-02" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-window-restore" /></div>
                        <div className="title">SMM</div>
                        <HashLink smooth to="/services#m-03" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-bullhorn" /></div>
                        <div className="title">Content Marketing</div>
                        <HashLink smooth to="/services#m-04" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-mail-bulk" /></div>
                        <div className="title">Email Marketing</div>
                        <HashLink smooth to="/services#m-05" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-object-ungroup" /></div>
                        <div className="title">Graphic Designing</div>
                        <HashLink smooth to="/services#c-01" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
                <Grid item md={4} sm={12} xs={12} className="card-item">
                    <div className="card">
                        <div className="icon"><i className="fas fa-edit" /></div>
                        <div className="title">Poster & Brochures</div>
                        <HashLink smooth to="/services#c-02" className="learn-more">Learn More <i className="fas fa-long-arrow-alt-right" /></HashLink>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
