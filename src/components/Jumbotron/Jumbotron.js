import React from "react";
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import Delayed from "./Delayed"

const jumbotron = () => (
    <div>
        <Typewriter
            string="Hi,"
            delay={200}
            stopBlinkinOnComplete
        />
        <br />
        <Delayed waitBeforeShow={2000}>
            <Typewriter
                string="I'm Tyler."
                delay={200}
                stopBlinkinOnComplete
            />
        </Delayed>
        <br />
        <Delayed waitBeforeShow={5000}>
            <Typewriter
                string="Welcome to my portfolio page."
                delay={200}
            />
        </Delayed>
    </div>
)



export default jumbotron;