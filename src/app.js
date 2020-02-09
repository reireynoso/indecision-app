console.log("App.js is running")

// JSX Javascript syntax extension

var app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: ["Option 1", "Option 2"]
}
var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
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

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

var template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : "Anono"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {
            getLocation(user.location)
        }
    </div>
)
var appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)