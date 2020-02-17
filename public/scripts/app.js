"use strict";

console.log("App.js is running");

// JSX Javascript syntax extension

var app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.option.value;
    // console.log(option)
    if (option) {
        app.options.push(option);
        e.target.option.value = "";
        // console.log(app.options)
        render();
    }
};

var removeList = function removeList() {
    app.options = [];
    render();
};

var appRoot = document.getElementById("app");
// const numbers = [55,101,1000]

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? "Here are your options" : "No Options"
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: removeList },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,

            // numbers.map(number => <p>{number}</p>)
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
