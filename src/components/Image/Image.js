import React from "react";
import "./Image.css";

const Image = props => (
    <div className="card" onClick = {props.setClicked}>
        <div className="img-container">
            <img alt={props.id} src={props.image}/>
            <br></br>
        </div>
    </div>
);

export default Image;