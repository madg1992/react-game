import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <img
                src={props.image}
                alt={props.id}
                class="card-img-top img-fluid"
                onClick={() => props.checkIfClicked(props.id)}
            />
        </div>
    </div>
);

export default Card;