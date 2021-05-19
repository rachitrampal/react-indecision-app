import React from "react";

const Option = (props) => {
    return <div className="option">
        <li className="option__text">{props.option}</li>
        <button
            className="button button--link"
            onClick={(e) => {
                return props.handleDeleteOption(props.option);
            }}
        >
            remove
        </button>
    </div>
}

export default Option;
/*class Option extends React.Component {
    render() {
        return <li>{this.props.option}</li>
    }
}*/