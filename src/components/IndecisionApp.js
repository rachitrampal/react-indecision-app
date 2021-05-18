import React from 'react';
import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Actions from "./Actions";
import OptionsModal from "./OptionsModal";

class IndecisionApp extends React.Component {
    // the constructor func can be removed using the babel plugin:  transform-class-properties
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.clearSelectedOption = this.clearSelectedOption.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    // Lifecycle Methods
    // We will use these methods to store/fetch options data from localStorage (browser storage)
    componentDidMount() {
        try {
            console.log('componentDidMount!!');
            const json = localStorage.getItem('options');
            if (json) {
                const options = JSON.parse(json);
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate!!');
        if (prevState.options.length !== this.state.options.length) {
            // store updated options data
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!!');
    }

    removeAllOptions() {
        this.setState(() => ({ options: [] }))
    }

    handlePick() {
        const index =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[index];
        this.setState(() => ({ selectedOption: option }));
    }

    clearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists!';
        }
        this.setState((prevState) => {
            // We will not be using commented statements because this will manipulate the state object(prevState) directly.
            // prevState.options.push(inputVal);
            return {
                options: prevState.options.concat([option])
            }
        })
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(opt => opt !== optionToRemove)
        }))
    }

    render () {
        const title = "Indecision App";
        const subtitle = "This is just the beginning";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Actions handlePick={this.handlePick} hasOptions={this.state.options.length}/>
                    <Options
                        options={this.state.options}
                        removeAllOptions={this.removeAllOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionsModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
            </div> )
    }
}

export default IndecisionApp;