const appRoot = document.getElementById("app")

let state = false

const handleChange = () => {
    state = !state
    render()
}

const render = () => {
    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={handleChange}>{!state ? "Show" : "Hide"} Details</button>
            {
                state ? <p>Here are some details for you to see!</p> : null
            }
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()