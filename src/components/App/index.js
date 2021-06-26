import { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: "JS!",
            par: "Some text",
            view: true,
        };
    }

    componentDidMount() {
        this.setState({ view: false });
        function outFn(a) {
            function inFn(b) {
                console.log(a + b);
            }
            a++;
            return inFn;
        }
        outFn(1)(1);
        outFn(0)(0);
        outFn()();
    }

    render() {
        if (this.state.view) {
            return <p>"loading..."</p>;
        }
        return (
            <div>
                <h1>{this.state.value}</h1>
            </div>
        );
    }
}

export default App;
