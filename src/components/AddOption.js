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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleOptionSubmit}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>)
    }
}