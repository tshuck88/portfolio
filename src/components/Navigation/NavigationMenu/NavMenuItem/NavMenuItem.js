import React from "react";
import classes from "./NavMenuItem.module.css";
// import { NavLink } from "react-router-dom";

const NavMenuItem = props => (
    <li className={classes.NavMenuItem}>
        <a href={props.link}>{props.children}</a>
    </li>
);

export default NavMenuItem;