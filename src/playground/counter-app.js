const appRoot = document.getElementById("app");
let count = 0;
class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count: 0
        };
    }

    // Lifecycle Methods
    // We will use these methods to store/fetch options data from localStorage (browser storage)
    componentDidMount() {
        try {
            const countString = localStorage.getItem('count');
            const count = parseInt(countString, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {
            // Do Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!!');
    }

    addOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    subtractOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    reset (){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<CounterApp />, appRoot);
/*
let count = 0;
const addOne = () => {
    count++;
    renderCounter();
}
const subtractOne = () => {
    count--;
    renderCounter();
}
const reset = () => {
    count = 0;
    renderCounter();
}

const renderCounter = () => {
    const template2 = 
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
    
    ReactDOM.render(template2, appRoot);
}

renderCounter();*/
