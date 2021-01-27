import React from "react";
import classes from "./Contact.module.css";

const Contact = () => (
    <div className={classes.Contact} id="contact">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contact</h1>
                    <div className={classes.Container}>
                        <div >
                            <p className={classes.ContactItem}>
                                <a href="mailto:tshuck88@gmail.com"><button className={`${classes.ContactImage} btn btn-dark`} type="button"><i className="far fa-envelope"></i></button></a>
                                <a className={classes.ContactText} href="mailto:tshuck88@gmail.com">tshuck88@gmail.com</a>
                            </p>
                            <p className={classes.ContactItem}>
                                <a href="https://github.com/tshuck88" target="_blank" rel="noreferrer"><button className={`${classes.ContactImage} btn btn-dark`} type="button"><i className="fab fa-github"></i></button></a>
                                <a className={classes.ContactText} href="https://github.com/tshuck88" target="_blank" rel="noreferrer">github.com/tshuck88</a>
                            </p>
                            <p className={classes.ContactItem}>
                                <a href="https://www.linkedin.com/in/tyler-shuck/" target="_blank" rel="noreferrer"><button className={`${classes.ContactImage} btn btn-dark`} type="button"><i className="fab fa-linkedin"></i></button></a>
                                <a className={classes.ContactText} href="https://www.linkedin.com/in/tyler-shuck/" target="_blank" rel="noreferrer">linkedin.com/in/tyler-shuck</a>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)



export default Contact;