class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
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
               <Actions hasOptions={this.state.options.length}/>
               <Options
                   options={this.state.options}
                   removeAllOptions={this.removeAllOptions}
                   handleDeleteOption={this.handleDeleteOption}
               />
               <AddOption
                   handleAddOption={this.handleAddOption}
               />
            </div> )
    }
}
// Creating stateless function components
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>)
};
/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>)
    }
}*/

const Actions = (props) => {
    return <button disabled={!props.hasOptions}>What are my options</button>
}
/*class Actions extends React.Component {
    render() {
        return <button disabled={!this.props.hasOptions}>What are my options</button>
    }
}*/
const Option = (props) => {
    return <div>
                <li>{props.option}</li>
                <button
                    onClick={(e) => {
                        return props.handleDeleteOption(props.option);
                    }}
                >
                remove
                </button>
            </div>
}
/*class Option extends React.Component {
    render() {
        return <li>{this.props.option}</li>
    }
}*/
const Options = (props) => {
    const options = props.options;
    return (
        <div>
            <button onClick={props.removeAllOptions}>Remove All Options</button>
            {!options.length && <p>Please add an option!</p>}
            <ol>{
                options.map((opt, index) => {
                    return <Option
                                key={index}
                                option={opt}
                                handleDeleteOption={props.handleDeleteOption}
                            />
                    })
            }</ol>
        </div>)
};
/*class Options extends React.Component {
    render() {
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.props.removeAllOptions}>Remove All Options</button>
                <ol>{
                    options.map((opt, index) => { return <Option key={index} option={opt} />})
                }</ol>
            </div>)
    }
}*/

class AddOption extends React.Component {
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))