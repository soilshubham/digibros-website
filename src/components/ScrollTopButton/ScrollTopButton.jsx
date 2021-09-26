import React, { useState } from 'react';
import './ScrollTopButton.scss'
import { Button } from "@material-ui/core";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

export const ScrollTopButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="scrl-top-button"
            onClick={scrollToTop}
            style={{ display: visible ? 'flex' : 'none' }}
        >
            <KeyboardArrowUpRoundedIcon fontSize="large" />
        </div>
    );
}

