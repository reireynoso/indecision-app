console.log("App.js is running")

// JSX Javascript syntax extension

var app = {
    title: "Indecision App",
    subtitle: "This is some info"
}
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Rei",
    age: 400,
    location: "Jersey City"
}

var userName = "Ayeee"
var userAge = "29"
var userLocation = "Jersey City"

var template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)
var appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)