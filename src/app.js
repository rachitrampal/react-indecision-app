class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <p>this is my app</p>
            </div>)
    }
}

class Actions extends React.Component {
    render() {
        return <button>What are my options</button>
    }
}

class Option extends React.Component {
    render() {
        return <li>Item 3</li>
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <Option />
            </ol>)
    }
}

const jsx = (
    <div>
        <Header />
        <Actions />
        <Options />
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'))