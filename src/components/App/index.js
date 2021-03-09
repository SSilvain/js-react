import { Component } from "react";
import Balance from "../Balance";
import Form from "../Form";
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
                    id: 0,
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

    onChange = (value) => {
        this.setState((state) => ({
            balance: state.balance + Number(value),
            transactions: [{ value, label: "change" }, ...state.transactions],
        }));
    };
    render() {
        return (
            <div>
                <Balance balance={this.state.balance} />
                <Form onChange={this.onChange} />
                <button onClick={this.STORE}>STORE</button>

                <Transactions transactions={this.state.transactions} />
            </div>
        );
    }
}

export default App;
