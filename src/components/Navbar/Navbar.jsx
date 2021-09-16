import React, { useState } from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";
import logo from '../../assets/Logo/logo.png'
import Dropdown from "react-multilevel-dropdown";
import "./Navbar.scss";

export const Navbar = () => {
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
                <ul className={`nav-links ${navBarToggle ? "active" : ""}`}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <Dropdown title="Services" position="right" buttonClassName="dropdown" menuClassName="dropdown-menu">
                            <Dropdown.Item className="dropdown-items">
                                All Services
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Web Development
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Dropdown.Item className="dropdown-items">Web Designing</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">E-Commerce</Dropdown.Item>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Marketing
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Dropdown.Item className="dropdown-items">SEO</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">SEM</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">SMM</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">Content Marketing</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">Email marketing</Dropdown.Item>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Creative
                                <Dropdown.Submenu position={window.innerWidth <= 968 ? "right" : "left"} className="dropdown-submenu">
                                    <Dropdown.Item className="dropdown-items">Graphic designing</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">Poster & Brochures</Dropdown.Item>
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
