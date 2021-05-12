import React from "react";
import Option from "./Option";

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

export default Options;

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