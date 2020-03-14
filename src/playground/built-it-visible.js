class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: true
        }
    }
    
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggle}>{!this.state.visibility ? "Show" : "Hide"} Details</button>
            {
                this.state.visibility ? <p>Here are some details for you to see!</p> : null
            }
        </div>
        )
    }
}

ReactDOM.render(<Visibility/>, document.getElementById("app"))

// const appRoot = document.getElementById("app")

// let state = false

// const handleChange = () => {
//     state = !state
//     render()
// }

// const render = () => {
//     let template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={handleChange}>{!state ? "Show" : "Hide"} Details</button>
//             {
//                 state ? <p>Here are some details for you to see!</p> : null
//             }
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// render()