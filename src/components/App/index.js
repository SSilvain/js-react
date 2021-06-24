import { Component } from "react";
import Balance from "../Balance";
import Form from "../Form";
import Transactions from "../Transactions";

let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: "JS!",
            par: "Some text",
            view: true,
        };
        this.foo = function () {
            // ..
        };

        this.x = function bar() {
            alert("hello");
        };

        this.x();
    }

    componentDidMount() {
        this.setState({ view: false });
    }

    render() {
        if (this.state.view) {
            return <p>"loading..."</p>;
        }
        return (
            <div>
                <h1>{this.state.value}</h1>
                {/* <p>{ this.}</p> */}
            </div>
        );
    }
}

export default App;
