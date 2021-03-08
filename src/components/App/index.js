import { Component } from "react";
import Balance from "../Balance";

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.balance < 5;
    }
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
            </div>
        );
    }
}

export default App;
