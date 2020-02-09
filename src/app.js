console.log("App.js is running")

// JSX Javascript syntax extension

const app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: ["Option 1", "Option 2"]
}

let template = (
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

const user = {
    name: "Rei",
    age: 400,
    location: "Jersey City"
}

let userName = "Ayeee"
let userAge = "29"
let userLocation = "Jersey City"

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : "Anono"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {
            getLocation(user.location)
        }
    </div>
)
const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)