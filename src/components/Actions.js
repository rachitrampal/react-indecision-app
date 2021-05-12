import React from "react";

const Actions = (props) => {
    return <button disabled={!props.hasOptions}>What are my options</button>
}

export default Actions;

/*class Actions extends React.Component {
    render() {
        return <button disabled={!this.props.hasOptions}>What are my options</button>
    }
}*/
