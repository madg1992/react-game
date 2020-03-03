import React from "react";
import "./Header.css";

const Header = props => (

    <div className="main-container">

        <nav className="navbar sticky-top navbar-light bg-warning justify-content-center">
            <h2 className="text-muted">Current game score: {props.currentScore} || Top score: {props.topScore}</h2>
        </nav>

    </div>
);

export default Header;