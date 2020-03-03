import React from "react";
import "./Jumbotron.css"

const Jumbotron = () => (
    <div className="main-container">
        <div className="jumbotron justify-content-center">
            <h1 className="display-3">React Memory Card Game</h1>
            <a href="https://github.com/madg1992"><img src="https://fontmeme.com/permalink/200301/9656a3d3143f8da1b8ed6ed164273594.png" alt="pokemon-font" border="0" /></a>
            <br />
            <h2 className="lead">Directions: Click on each photo only once!</h2>
        </div>
    </div>
);

export default Jumbotron;