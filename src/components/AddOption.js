import React from "react";

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptionSubmit = this.handleOptionSubmit.bind(this);
        // Defaulting the error state property
        this.state = {
            error: undefined
        };
    }
    handleOptionSubmit(e) {
        e.preventDefault();
        const inputVal = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(inputVal);
        this.setState(() => ({ error }));

        if (!error) e.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOptionSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>)
    }
}