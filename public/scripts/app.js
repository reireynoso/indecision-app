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

var user = {
    name: "Rei",
    age: 400,
    location: "Jersey City"
};

var userName = "Ayeee";
var userAge = "29";
var userLocation = "Jersey City";

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name.toUpperCase() : "Anono"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
