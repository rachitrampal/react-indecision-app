'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    // Lifecycle Methods
    // We will use these methods to store/fetch options data from localStorage (browser storage)


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                console.log('componentDidMount!!');
                var json = localStorage.getItem('options');
                if (json) {
                    var options = JSON.parse(json);
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do Nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            console.log('componentDidUpdate!!');
            if (prevState.options.length !== this.state.options.length) {
                // store updated options data
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount!!');
        }
    }, {
        key: 'removeAllOptions',
        value: function removeAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option already exists!';
            }
            this.setState(function (prevState) {
                // We will not be using commented statements because this will manipulate the state object(prevState) directly.
                // prevState.options.push(inputVal);
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (opt) {
                        return opt !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision App";
            var subtitle = "This is just the beginning";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Actions, { hasOptions: this.state.options.length }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAllOptions: this.removeAllOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);
// Creating stateless function components


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
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

var Actions = function Actions(props) {
    return React.createElement(
        'button',
        { disabled: !props.hasOptions },
        'What are my options'
    );
};
/*class Actions extends React.Component {
    render() {
        return <button disabled={!this.props.hasOptions}>What are my options</button>
    }
}*/
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            null,
            props.option
        ),
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    return props.handleDeleteOption(props.option);
                }
            },
            'remove'
        )
    );
};
/*class Option extends React.Component {
    render() {
        return <li>{this.props.option}</li>
    }
}*/
var Options = function Options(props) {
    var options = props.options;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAllOptions },
            'Remove All Options'
        ),
        !options.length && React.createElement(
            'p',
            null,
            'Please add an option!'
        ),
        React.createElement(
            'ol',
            null,
            options.map(function (opt, index) {
                return React.createElement(Option, {
                    key: index,
                    option: opt,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOptionSubmit = _this2.handleOptionSubmit.bind(_this2);
        // Defaulting the error state property
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleOptionSubmit',
        value: function handleOptionSubmit(e) {
            e.preventDefault();
            var inputVal = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(inputVal);
            this.setState(function () {
                return { error: error };
            });

            if (!error) e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOptionSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
