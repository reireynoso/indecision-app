console.log("App.js is running")

// JSX Javascript syntax extension

var template = (
    <div>
        <h1>Does this hey App.js</h1>
        <p>This is Some info</p>
        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

var template2 = (
    <div>
        <h1>Rei Rey</h1>
        <p>Age: 29</p>
        <p>Location: Jersey City</p>
    </div>
)
var appRoot = document.getElementById("app")

ReactDOM.render(template2, appRoot)