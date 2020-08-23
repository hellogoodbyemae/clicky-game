import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
    <div className="jumbotron">{props.children}
        <h1 className="display-4">The Office Edition!</h1>
        <h3 className="lead">Click on an image to earn points, but don't click on any more than once!</h3>
    </div>
)
export default Jumbotron;