import React from "react";

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

export default Option;
/*class Option extends React.Component {
    render() {
        return <li>{this.props.option}</li>
    }
}*/