import React from "react";
import classes from "./NavigationMenu.module.css";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavMenuItem link="/">Home</NavMenuItem>
        <NavMenuItem link="/about">About</NavMenuItem>
        <NavMenuItem link="/projects">Projects</NavMenuItem>
        <NavMenuItem link="/skills">Skills</NavMenuItem>
        <NavMenuItem link="/resume">Resume</NavMenuItem>
    </ul>
);

export default navigationItems;