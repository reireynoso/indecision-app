"use strict";

console.log("App.js is running");

// JSX Javascript syntax extension

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Does this hey App.js"
    ),
    React.createElement(
        "p",
        null,
        "This is Some info"
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

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Rei Rey"
    ),
    React.createElement(
        "p",
        null,
        "Age: 29"
    ),
    React.createElement(
        "p",
        null,
        "Location: Jersey City"
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
