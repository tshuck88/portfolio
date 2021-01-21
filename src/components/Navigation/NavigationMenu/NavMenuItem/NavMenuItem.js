import React from "react";
import classes from "./NavMenuItem.module.css";
import { NavLink } from "react-router-dom";

const navMenuItem = props => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={props.link}
            exact
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navMenuItem;