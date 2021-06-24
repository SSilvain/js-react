import { Component } from "react";
import Balance from "../Balance";
import Form from "../Form";
import Transactions from "../Transactions";

let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div>
                <h1>JS</h1>
            </div>
        );
    }
}

export default App;
