import React, { useState } from 'react'
import './GetQuoteContent.scss'
import { Button, Grid, TextField, MenuItem, Box } from "@material-ui/core";

import emailjs from 'emailjs-com';

export const GetQuoteContent = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [look, setLook] = useState("")
    const [msg, setMsg] = useState("")


    return (
        <div className="getquote-hero" id="getquote">
            <div className="heading">Get a Quote</div>
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
                                    <a href="tel:8500690700"> <i className="fas fa-phone-alt" />&nbsp;+91 8500690700 </a>
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

                            <TextField
                                onChange={(e) => setName(e.target.value)}
                                required id="outlined-basic" label="Name" variant="outlined" className="text-field" />
                            <TextField
                                onChange={(e) => setPhone(e.target.value)}
                                required id="outlined-number" label="Phone Number" variant="outlined" type="number" className="text-field" />
                            <TextField
                                onChange={(e) => setEmail(e.target.value)}
                                required id="outlined-basic" label="Email Address" variant="outlined" className="text-field" />
                            <TextField

                                onChange={(e) => setLook(e.target.value)}
                                required
                                id="outlined-select-feature"
                                select
                                label="Looking For..."
                                variant="outlined"
                                className="text-field"
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                }}
                            >
                                <MenuItem value="Web designing">
                                    Web designing
                                </MenuItem>
                                <MenuItem value="E-commerce">
                                    E-commerce
                                </MenuItem>
                                <MenuItem value="SEO">
                                    SEO
                                </MenuItem>
                                <MenuItem value="SEM">
                                    SEM
                                </MenuItem>
                                <MenuItem value="SMM">
                                    SMM
                                </MenuItem>
                                <MenuItem value="Content Marketing">
                                    Content Marketing
                                </MenuItem>
                                <MenuItem value="Email Marketing">
                                    Email Marketing
                                </MenuItem>
                                <MenuItem value="Graphic Designing">
                                    Graphic Designing
                                </MenuItem>
                                <MenuItem value="Posters & Brouchure">
                                    Posters & Brouchure
                                </MenuItem>

                            </TextField>
                            <TextField
                                onChange={(e) => setMsg(e.target.value)}
                                id="outlined-multiline-flexible"
                                label="Your Message"
                                multiline
                                maxRows={4}
                                variant="outlined"
                                className="text-field"
                            />
                            <Button className="submit-btn" onClick={() => {
                                emailjs.send("service_jd6lo8m", "template_qoa3qd1", {
                                    name: name,
                                    phone: phone,
                                    email: email,
                                    look: look,
                                    msg: msg,
                                }, "user_MaYoe5iqZ7Re90Q1eelzv")
                                    .then((res) => {
                                        window.location.reload()
                                    }
                                    );
                            }}>Submit</Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
