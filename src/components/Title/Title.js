import React, {Component} from "react";
import "./Title.css";

class Title extends Component {
    render() {
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="leftItem">Clicky Game</div>
                <div className="centerItem">Click an image to begin!</div>
                <div className="rightItem">Score: {this.props.score}</div>
            </nav>
        )};
};

export default Title;