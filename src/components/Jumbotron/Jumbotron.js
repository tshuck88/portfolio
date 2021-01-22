import React from "react";
import classes from "./Jumbotron.module.css";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import Delayed from "../../hoc/Delayed/Delayed"

const jumbotron = () => (
    <div className={classes.Jumbotron}>
        <Typewriter
            string="Hi,"
            delay={150}
            stopBlinkinOnComplete
        />
        <br />
        <Delayed waitBeforeShow={2000}>
            <Typewriter
                string="I'm Tyler."
                delay={150}
                stopBlinkinOnComplete
            />
        </Delayed>
        <br />
        <Delayed waitBeforeShow={5000}>
            <Typewriter
                string="Welcome to my website."
                delay={150}
            />
        </Delayed>
    </div>
)



export default jumbotron;