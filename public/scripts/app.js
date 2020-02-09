"use strict";

console.log("App.js is running");

// JSX Javascript syntax extension

var app = {
    title: "Indecision App",
    subtitle: "This is some info"
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
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

var user = {
    name: "Rei",
    age: 400,
    location: "Jersey City"
};

var userName = "Ayeee";
var userAge = "29";
var userLocation = "Jersey City";

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        user.location
    )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
