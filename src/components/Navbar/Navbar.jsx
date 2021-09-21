import React, { useState } from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";
import logo from '../../assets/Logo/logo.png'
import Dropdown from "react-multilevel-dropdown";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = ({ variant }) => {
    const [navBarToggle, setNavBarToggle] = useState(false);

    return (
        <>
            <nav>
                {navBarToggle ? (
                    <div
                        className="overlay"
                        onClick={() => {
                            setNavBarToggle(!navBarToggle);
                        }}
                    ></div>
                ) : null}
                <div className="nav-logo"><img src={logo} className="logo" /></div>
                <ul className={`nav-links ${navBarToggle ? "active" : ""} ${variant}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Dropdown title="Services" position="right" buttonClassName="dropdown" menuClassName="dropdown-menu">
                            <Dropdown.Item className="dropdown-items">
                                <Link to="/services">
                                    All Services
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Web Development
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            Web Designing
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            E-Commerce
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Marketing
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            SEO
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            SEM
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            SMM
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            Content Marketing
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            Email marketing
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Creative
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            Graphic designing
                                        </Dropdown.Item>
                                    </Link>
                                    <Link to="/services">
                                        <Dropdown.Item className="dropdown-items">
                                            Poster & Brochures
                                        </Dropdown.Item>
                                    </Link>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                        </Dropdown>
                    </li>
                    <li>
                        <Button
                            className="btn"
                            variant="contained"
                            color="primary"
                            disableElevation
                        >
                            Get A Quote
                        </Button>
                    </li>
                </ul>
                <MenuIcon
                    className="nav-toggle-icon"
                    onClick={() => {
                        setNavBarToggle(!navBarToggle);
                    }}
                />
            </nav>
        </>
    );
};
