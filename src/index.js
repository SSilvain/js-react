import React from "react";
import ReactDOM from "react-dom";

const App = function (props) {
    return (
        <div>
            <h1>Postman: </h1>
            <ul>
                <li>Name: {props.name}</li>
                <li>Age: {props.age}</li>
            </ul>
        </div>
    );
};

ReactDOM.render(<App name="John" age="73" />, document.getElementById("root"));
