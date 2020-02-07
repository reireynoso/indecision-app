console.log("App.js is running")

// JSX Javascript syntax extension

// var template = <p>This is JSX from App.js</p>;
var template = React.createElement("h1", {
    id: "someID"
  }, "This is JSX from App.js");

var appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)