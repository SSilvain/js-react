import {Component} from "react";
import Balance from "../Balance";
import Transaction from "../Transaction";
import Transactions from "../Transactions";

let id = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
            transactions: [
                {
                    label: "void",
                    value: 0,
                    id: 0
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
    onIncrease = () => {
        this.setState((state) => ({
            balance: state.balance + 1,
            transactions: [
                ...state.transactions,
                {
                    label: "increase",
                    value: 1,
                    id: ++id
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
                    id: ++id
                },
            ],
        }));
    };



    render() {
        return (
            <div>
                <Balance balance={this.state.balance}/>
                <button onClick={this.onIncrease}>Add 1</button>
                <button onClick={this.onDecrease}>Minus 1</button>
                <button onClick={this.STORE}>STORE</button>
                
                    <Transactions transactions={this.state.transactions} />
            </div>
        );
    }
}

export default App;
