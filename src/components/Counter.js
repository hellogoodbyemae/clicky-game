import React from "react";

class Counter extends React.Component {
    state = {
        count: 0
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return(
            <div className="card text-center">
                <div className="card-header bg-orimary text-white">
                    <div className="card-body">
                        <p className="card-text">Score: {this.state.count}</p>
                    </div>
                </div>
            </div>
        )
    };
};

export default Counter;