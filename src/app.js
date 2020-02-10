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

let count = 0
const addOne = () => {
    count++
    console.log(count)
}
const minusOne = () => {
    count--
    console.log(count)
}
const reset = () => {
    count = 0
    console.log(count)
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}> +1</button>
        <button onClick={minusOne}> -1</button>
        <button onClick={reset}>Reset</button>
    </div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(templateTwo, appRoot)