import React from "react";
import classes from "./AboutMe.module.css";
import bioPic from "../../assets/images/bioPic.jpg";

const AboutMe = () => (
    <div className={classes.AboutMe} id="about">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className={classes.imgWrapper}>
                        <img src={bioPic} alt="Tyler Shuck"></img>
                    </div>

                </div>
                <div className="col">
                    <h1>About Me</h1>
                    <p>
                        Full Stack Web Developer with a focus on front end development.
                        Successfully completed a web development bootcamp and earned a certificate from the University of Washington.
                        Experience working in teams using AGILE development methodologies, MVP concepts, and version control.
                        Passionate about creating efficient, scalable, and responsive web experiences.
                        Excellent oral and written communication skills with professional experience interfacing with clients and colleagues
                        coming from a background in real estate. Strong desire to learn new technologies and continue to improve my developer skills.
                    </p>
                </div>
            </div>
        </div>


    </div>
)



export default AboutMe;