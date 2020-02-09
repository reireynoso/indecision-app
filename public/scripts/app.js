"use strict";

console.log("App.js is running");

// JSX Javascript syntax extension

var template = React.createElement(
  "p",
  null,
  "Does this hey App.js"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
