'use strict';

console.log("This is React app!");

var data = {
    name: 'rachit',
    age: 29,
    location: 'Canada',
    options: []
};

var getOptionsList = function getOptionsList(options) {
    return options.length ? React.createElement(
        'ol',
        null,
        options.map(function (value, index) {
            return React.createElement(
                'li',
                { key: index },
                value
            );
        })
    ) : null;
};

var submitForm = function submitForm(e) {
    // this will prevent rendering form everytime a change is made
    e.preventDefault();

    var inputText = e.target.elements.option.value;

    if (inputText) {
        data.options.push(inputText);
        render();
    }
    return;
};

var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'li',
        null,
        'Location: ',
        location
    ) : null;
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Indecision App'
        ),
        React.createElement(
            'p',
            null,
            'Update!This is indecision app'
        ),
        React.createElement(
            'p',
            null,
            'Name: ',
            data.name
        ),
        React.createElement(
            'p',
            null,
            'Age: ',
            data.age && data.age > 25 ? data.age : 'N/A'
        ),
        getLocation(data.location),
        getOptionsList(data.options),
        React.createElement(
            'form',
            { onSubmit: submitForm },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    var appRoot = document.getElementById("app");

    ReactDOM.render(template, appRoot);
};

render();
