import { Component } from "react";
import Balance from "../Balance";

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
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
    //     return nextState.balance < 5;
    // }
    onIncrease = () => {
        this.setState({
            balance: this.state.balance + 1,
        });
    };
    onDecrease = () => {
        this.setState({
            balance: this.state.balance - 1,
        });
    };
    render() {
        return (
            <div>
                <Balance balance={this.state.balance} />
                <button onClick={this.onIncrease}>Add 1</button>
                <button onClick={this.onDecrease}>Minus 1</button>
                <button onClick={this.STORE}>STORE</button>
            </div>
        );
    }
}

export default App;
