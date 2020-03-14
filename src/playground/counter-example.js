class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        }
    }
    handleAddOne(){
        // console.log("clicked Add")    
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })    
    }

    handleMinusOne(){
        // console.log("clicked Minus")
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })   
    }

    handleReset(){
        // console.log("clicked Reset")
        this.setState(() => {
            return {
                count: 0
            }
        })   
        // this.setState({
        //     count: 0
        // })

        // this.setState({
        //     count: this.state.count + 1
        // })

        // this.setState((prevState) => {
        //     return {
        //         count: prevState.count + 1
        //     }
        // })
    }

    render(){
        return(
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+ 1</button>
            <button onClick={this.handleMinusOne}>- 1</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('app'))

// let count = 0
// const addOne = () => {
//     count++
//     renderCounterApp()
//     console.log(count)
// }
// const minusOne = () => {
//     count--
//     renderCounterApp()
//     console.log(count)
// }
// const reset = () => {
//     count = 0
//     renderCounterApp()
//     console.log(count)
// }

// const appRoot = document.getElementById("app")

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}> +1</button>
//             <button onClick={minusOne}> -1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()

