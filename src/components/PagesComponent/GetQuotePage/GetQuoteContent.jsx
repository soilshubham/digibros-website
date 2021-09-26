import React from 'react'
import './GetQuoteContent.scss'

import { Button, Grid, TextField, MenuItem } from "@material-ui/core";

export const GetQuoteContent = () => {
    return (
        <div className="getquote-hero" id="getquote">
            <div className="heading">Get A Quote</div>
            <div className="content">
                <Grid container className="grid-container">
                    <Grid item md={6} xs={12} className="grid-item">
                        <div className="left">
                            <p>
                                Adapt your marketing message to meet the needs of your audience. Simply fill in
                                the form and submit, a member of our team will get back to you as soon as
                                possible to talk through what you need and how we can help. Alternatively, give us
                                a call using the number mentioned below. We look forward to hearing from you!
                            </p>
                            <div className="links">
                                <div className="">
                                    <a href="https://api.whatsapp.com/send?phone=+918500690700"> <i className="fas fa-phone-alt" />&nbsp;+91 8500690700 </a>
                                </div>
                                <div className="">
                                    <a href="https://api.whatsapp.com/send?phone=+919618234477"> <i className="fas fa-phone-alt" />&nbsp;+91 9618234477 </a>
                                </div>
                                <div className="">
                                    <a href="https://api.whatsapp.com/send?phone=+917287054762"> <i className="fas fa-phone-alt" />&nbsp;+91 7287054762 </a>
                                </div>
                                <div className="subtitle">
                                    <i className=""> (Call Us To Get Started) </i>
                                </div>
                                <div className="">
                                    <a href="mailto:digibros2021@gmail.com"><i className="fas fa-envelope" />&nbsp;digibros2021@gmail.com</a>
                                </div>
                                <div className="subtitle">
                                    <i className=""> (Mail Us To Get Started) </i>
                                </div>
                            </div>
                        </div>


                    </Grid>
                    <Grid item md={6} xs={12} className="grid-item">
                        <div className="form">
                            <TextField required id="outlined-basic" label="Name" variant="outlined" className="text-field" />
                            <TextField required id="outlined-number" label="Phone Number" variant="outlined" type="number" className="text-field" />
                            <TextField required id="outlined-basic" label="Email Address" variant="outlined" className="text-field" />
                            <TextField
                                required
                                id="outlined-select-feature"
                                select
                                label="Looking For..."
                                variant="outlined"
                                className="text-field"
                            >
                                <MenuItem value="Feature number 1">
                                    Feature number 1
                                </MenuItem>
                                <MenuItem value="Feature number 2">
                                    Feature number 2
                                </MenuItem>
                                <MenuItem value="Feature number 3">
                                    Feature number 3
                                </MenuItem>
                                <MenuItem value="Feature number 4">
                                    Feature number 4
                                </MenuItem>

                            </TextField>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Your Message"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                className="text-field"
                            />
                            <Button className="submit-btn">Submit</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
