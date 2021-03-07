import { Component } from "react";
import Balance from "../Balance";

class App extends Component {
    constructor() {
        super();
        this.state = {
            balance: 0,
        };
    }
    render() {
        return (
            <div>
                <Balance balance={this.state.balance}>Баланс:</Balance>
                <Balance balance={this.state.balance}>Остаток:</Balance>
            </div>
        );
    }
}

export default App;
