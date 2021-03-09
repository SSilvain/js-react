import {Component} from "react";
import Balance from "../Balance";
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

    renderTrans = () => {return (
        this.state.transactions.map(t => {
            return <Transactions key={t.id} label={t.label} value={t.value}/>
        }))
    }



    render() {
        return (
            <div>
                <Balance balance={this.state.balance}/>
                <button onClick={this.onIncrease}>Add 1</button>
                <button onClick={this.onDecrease}>Minus 1</button>
                <button onClick={this.STORE}>STORE</button>
                
                <ul>
                    {this.renderTrans()}
                    {/*{this.state.transactions.map(t => {
                        return <Transactions id={t.id} label={t.label} value={t.value}/>
                    })
                    }*/}
                </ul>
            </div>
        );
    }
}

export default App;
