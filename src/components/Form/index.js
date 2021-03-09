import { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            value: 0,
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
    };
    onChange = (e) => {
        const { value } = e.target;

        this.setState({
            value,
        });
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="balance"
                    placeholder="Сума"
                    type="number"
                    onChange={this.onChange}
                    value={this.state.value}
                />
                <button>Сохранить</button>
            </form>
        );
    }
}

export default Form;
