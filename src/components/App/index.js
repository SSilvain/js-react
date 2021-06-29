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
    newClosure = (days) => {
        return (salary) => {
            return days * salary;
        };
    };
    fullSalaryFive = this.newClosure(5);
    newObject = Object.create(
        {},
        {
            name: {
                value: "Serhii",
            },
        }
    );

    render() {
        if (this.state.view) {
            return <p>"loading..."</p>;
        }
        return (
            <div>
                <h1>{this.fullSalaryFive(100)}</h1>
            </div>
        );
    }
}

export default App;
