import React from "react";

const Actions = (props) => {
    return <button
             className="big_button"
             onClick={props.handlePick}
             disabled={!props.hasOptions}
            >
            What are my options ?
            </button>
}

export default Actions;

/*class Actions extends React.Component {
    render() {
        return <button disabled={!this.props.hasOptions}>What are my options</button>
    }
}*/
