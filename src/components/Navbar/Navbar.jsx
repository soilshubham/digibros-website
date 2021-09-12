import React, { useState } from "react";
import { Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";
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
                <div className="nav-logo">DigiBros</div>
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
                                Item 1
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">
                                Item 2
                                <Dropdown.Submenu position="left" className="dropdown-submenu">
                                    <Dropdown.Item className="dropdown-items">Subitem 1</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-items">Subitem 2</Dropdown.Item>
                                </Dropdown.Submenu>
                            </Dropdown.Item>
                            <Dropdown.Item className="dropdown-items">Item 3</Dropdown.Item>
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
