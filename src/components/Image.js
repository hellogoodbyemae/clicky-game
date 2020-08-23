import React from "react";

const Image = props => (
    <div className="card" onClick = {props.setClicked}>
        <div className="img-container">
            <img alt={props.id} src={props.image}/>
        </div>
    </div>
);

export default Image;