import React from "react";
import "./Footer.scss";
import { Button, Grid, Typography } from "@material-ui/core";

export const Footer = () => {
    return (
        <div className="footer">
            <Grid container className="footer-grid">
                <Grid item md={4} xs={12} className="footer-col">
                    <div className="container container-left">
                        <div className="heading">
                            <h2>DigiBros</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
                            quidem! Accusantium reiciendis ipsa, quisquam qui perferendis
                            distinctio soluta quasi, nostrum neque, ratione quis molestiae!
                            Quisquam quas rem at quidem praesentium.
                        </p>
                    </div>
                </Grid>
                <Grid md={4} xs={12} className="footer-col">
                    <div className="container container-middle">
                        <div className="heading">
                            <h2>Address</h2>
                        </div>
                        <p>
                            3416 Holt Street, BLUE SPRINGS,
                            <br />
                            Andra Pradesh, 492001 India
                            <br />
                            <strong>+91 9987123456</strong>
                        </p>
                    </div>
                </Grid>
                <Grid item md={4} xs={12} className="footer-col">
                    <div className="container container-right">
                        <div className="heading">
                            <a href="#">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-whatsapp" />
                            </a>
                        </div>
                        <p>We would love to hear from you!</p>
                    </div>
                </Grid>
            </Grid>
            <div className="copyright">Copyright © DigiBros</div>
        </div>
    );
};
