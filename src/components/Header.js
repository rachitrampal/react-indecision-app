// Creating stateless function components
import React from "react";

const Header = (props) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                <h2 className="header__subtitle">{props.subtitle}</h2>
            </div>
        </div>)
};

export default Header;
/*class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>)
    }
}*/