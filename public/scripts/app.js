"use strict";

console.log("App.js is running");

// JSX Javascript syntax extension

var app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: ["Option 1", "Option 2"]
};

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
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log(count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log(count);
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log(count);
};

var appRoot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            " +1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            " -1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
