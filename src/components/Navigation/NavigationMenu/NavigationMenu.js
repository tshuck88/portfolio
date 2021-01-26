import React, { useState, useEffect, useRef } from "react";
import classes from "./NavigationMenu.module.css";
import NavMenuItem from "./NavMenuItem/NavMenuItem";

const NavigationItems = () => {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`sticky-top ${navBackground ? classes.navScroll : null}`}>
            <ul className={classes.NavigationMenu}>
                <NavMenuItem link="/">HOME</NavMenuItem>
                <NavMenuItem link="/#about">ABOUT</NavMenuItem>
                <NavMenuItem link="/#projects">PROJECTS</NavMenuItem>
                <NavMenuItem link="/skills">SKILLS</NavMenuItem>
                <NavMenuItem link="/#contact">CONTACT</NavMenuItem>
                <NavMenuItem link="/resume">RESUME</NavMenuItem>
            </ul>
        </nav>

    );
}

export default NavigationItems;