import { Component } from "react";
import User from "../User";

class App extends Component {
    name = "Vanda";
    render() {
        return (
            <div>
                <User name={this.name} age={22} />
                <User name="Kate" age="28" />
            </div>
        );
    }
}

export default App;
