import { Component } from "react";
import Balance from "../Balance";

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: [
                {
                    label: "void",
                    value: 0,
                },
            ],
        };
    }
    componentDidMount() {
        let balance = JSON.parse(window.localStorage.getItem("balance"));
        this.setState({
            balance,
        });
    }
    STORE = () => {
        window.localStorage.setItem(
            "balance",
            JSON.stringify(this.state.balance)
        );
    };
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.balance < 17;
    // }
    onIncrease = () => {
        this.setState((state) => ({
            balance: state.balance + 1,
            transactions: [
                ...state.transactions,
                {
                    label: "increase",
                    value: 1,
                },
            ],
        }));
    };
    onDecrease = () => {
        this.setState((state) => ({
            balance: state.balance - 1,
            transactions: [
                ...state.transactions,
                {
                    label: "decrease",
                    value: 1,
                },
            ],
        }));
    };
    render() {
        return (
            <div>
                <Balance balance={this.state.balance} />
                <div>{this.state.transactions[0].label}</div>
                <button onClick={this.onIncrease}>Add 1</button>
                <button onClick={this.onDecrease}>Minus 1</button>
                <button onClick={this.STORE}>STORE</button>
            </div>
        );
    }
}

export default App;
