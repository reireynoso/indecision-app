console.log("App.js is running")

// JSX Javascript syntax extension

const app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.option.value
    // console.log(option)
    if(option){
        app.options.push(option);
        e.target.option.value = "";
        // console.log(app.options)
        render()
    }
}

const removeList = () => {
    app.options = []
    render()
}

const appRoot = document.getElementById("app")
// const numbers = [55,101,1000]

const render = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <p>{app.options.length}</p>
            <button onClick={removeList}>Remove All</button>
            <ol>
            {
                // numbers.map(number => <p>{number}</p>)
                app.options.map(option => <li key={option}>{option}</li>)
            }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)
}

render()
