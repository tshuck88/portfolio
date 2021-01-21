import React from "react";
import classes from "./NavigationMenu.module.css";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const navigationItems = () => (
    <ul className={classes.NavigationMenu}>
        <NavMenuItem link="/">HOME</NavMenuItem>
        <NavMenuItem link="/about">ABOUT</NavMenuItem>
        <NavMenuItem link="/projects">PROJECTS</NavMenuItem>
        <NavMenuItem link="/skills">SKILLS</NavMenuItem>
        <NavMenuItem link="/resume">RESUME</NavMenuItem>
    </ul>
);

export default navigationItems;