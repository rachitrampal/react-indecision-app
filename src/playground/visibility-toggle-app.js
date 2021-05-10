const appRoot = document.getElementById('app');
class VisibilityToggleApp extends React.Component {
    constructor(props) {
        super(props);
        this.onClickToggle = this.onClickToggle.bind(this);
        this.state = {
            showDetailsToggle: false
        }
    }

    onClickToggle() {
        this.setState((prevState) => {
            return {
                showDetailsToggle: !prevState.showDetailsToggle
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onClickToggle}>{this.state.showDetailsToggle ? 'Hide Details' : 'Show Details'}</button>
                {this.state.showDetailsToggle && <div><p>These are my details</p></div>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggleApp />, appRoot)
/*
let showDetailsToggle = false;

const onClickToggle = () => { 
    showDetailsToggle = !showDetailsToggle;
    render(); 
}; 

const render = () => {
    const template = 
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onClickToggle}>{showDetailsToggle ? 'Hide Details' : 'Show Details'}</button>
        {showDetailsToggle && <div><p>These are my details</p></div>}
    </div>; 

    ReactDOM.render(template, appRoot);
}

render();*/
