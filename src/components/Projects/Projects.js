import React from "react";
import classes from "./Projects.module.css";

const Projects = () => (
    <div className={classes.Projects} id="projects">
        <div className="container-fluid">
            <h1>My Projects</h1>
            <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Burger Builder</h5>
                            <p className="card-text">Application allowing users to build and order themselves a burger. Built with React, Redux, and Firebase.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/burger-builder" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://cranky-yalow-0d2e3c.netlify.app/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">VolunTeam!</h5>
                            <p className="card-text">Volunteering and community service event website allowing users to search for and create events. Developed in a group of 4 using React, Node.js, Express, MongoDB, and more.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/ajperkins92/Project-3" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://quiet-hamlet-85082.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Shopazon</h5>
                            <p className="card-text">E-commerce website where users can browse and purchase products. Built in a group of 4 using JavaScript, jQuery, Node.js, Express Handlebars, MySQL, and more.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/jazznerd206/Shopazon" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://evening-mesa-27220.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Plant-Forge</h5>
                            <p className="card-text">Website developed for a startup company using HTML, CSS, JavaScript, MailChimp, and BigCommerce online store.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/plant-forge" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="http://plant-forge.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">HappyHour</h5>
                            <p className="card-text">Website that allows users to search for cocktail recipes and find nearby bars to drink at.
                            Group project with 4 developers built with HTML, CSS, jQuery and integrates Google Maps API and CocktailDB API.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/neverage84/Project_1" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://neverage84.github.io/Project_1/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">NYT Scraper</h5>
                            <p className="card-text">Full stack web application that scrapes the New York Times wesbite for articles and allows users to make notes on each article. Developed with jQuery, Node, Mongoose, Express Handlebars.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/nyt-scraper" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">LIRI Node App</h5>
                            <p className="card-text">CLI application that can search for songs, movies, and concerts based off user input and writes the responses to a text file. Developed using Node, axios, Spotify API, Bandsintown API, and OMDB API.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/liri-node-app" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Bamazon</h5>
                            <p className="card-text">CLI storefront application with 3 different uses for customers, managers, and supervisors allowing them to purchase products, manage inventory, and view department sales. Built using Node, MySQL, and Inquirer. </p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/bamazon" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">NFL Clicky Game</h5>
                            <p className="card-text">NFL themed game clicking game built using React.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/clicky-game" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://gracious-hypatia-13a03c.netlify.app/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Constructor Word Guess</h5>
                            <p className="card-text">CLI word guessing game using constructor functions, Node, and Inquirer.js.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/constructor-word-guess" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Burger App</h5>
                            <p className="card-text">Full stack application using Node, MySQL, Express Handlebars, ORM and MVC concepts.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/burger" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://blooming-plateau-16312.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Trivia Game</h5>
                            <p className="card-text">Sports trivia game built using JavaScript, jQuery, Bootstrap, and Giphy API.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/Trivia-Game" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://tshuck88.github.io/Trivia-Game/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Friend Finder</h5>
                            <p className="card-text">Full stack application where users fill out a short survey and are matched to a friend based on their answers. Developed using Node, jQuery, Bootstrap and deployed to Heroku.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/FriendFinder" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://dry-spire-17366.herokuapp.com/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Giftastic</h5>
                            <p className="card-text">Website that users can search for gifs and add them to favorites. Developed using Bootstrap, jQuery, and Giphy API.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/giftastic" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://tshuck88.github.io/giftastic/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">NFL Word Guessing Game</h5>
                            <p className="card-text">NFL themed word guessing game developed with vanilla JavaScript, HTML, and CSS.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/Word-Guess-Game" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://tshuck88.github.io/Word-Guess-Game/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Star Wars RPG Game</h5>
                            <p className="card-text">Star Wars themed RPG type game where users can select a character and attack other characters. Developed using jQuery, JavaScript, HTML, CSS.</p>
                        </div>
                        <div className={`${classes.buttonWrapper} buttonWrapper d-flex justify-content-between`}>
                            <a href="https://github.com/tshuck88/unit-4-game" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Github</button></a>
                            <a href="https://tshuck88.github.io/unit-4-game/" target="_blank" rel="noreferrer"><button type="button" className="btn btn-outline-dark">Demo</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)



export default Projects;