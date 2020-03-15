// const obj = {
//     name: "Hey",
//     getName(){
//         return this.name
//     }
// }

// const getName = obj.getName.bind(obj)

// console.log(getName())

// const funct = function(){
//     console.log(this)
// }

// funct()

class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteSpecificOption = this.handleDeleteSpecificOption.bind(this)
    }

    // handleDeleteOptions(){
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     })
    // }
    componentDidMount(){
        // console.log("fetching data")
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)
            if(options){
                this.setState(() => ({
                    options
                }))
            }

        } catch(e){
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            console.log("saving data")
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json)
        }
    }

    componentWillUnmount(){
        console.log("Unmount")
    }

    handleDeleteOptions(){
        this.setState(() => ({
            options: []
        }))
    }

    handleDeleteSpecificOption(optionClicked){
        // console.log(option)
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionClicked)
        }))
    }

    handleAddOption(option){
        if(!option){
            return "Enter valid value to add item"
        }
        else if(this.state.options.indexOf(option) > -1){
            return "This option exists"
        }

        // this.setState((prevState) => {
        //     return {
        //         // options: [...prevState.options, option] 
        //         options: prevState.options.concat(option)
        //     }
        // })
        this.setState((prevState) => (
            {
                // options: [...prevState.options, option] 
                options: prevState.options.concat(option)
            }
        ))
    }

    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random]
        alert(option)
    }

    render(){
        const subtitle = "Put your life in the hands of a computer!"
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={ this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteSpecificOption={this.handleDeleteSpecificOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// }

// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    return (
    <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
    )
}

Header.defaultProps = {
    title: "Indecision"
}

// class Action extends React.Component {
//     render(){
//         return (
//         <div>
//             <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOptions}
//             >What Should I do?</button>
//         </div>
//         )
//     }
// }

const Action = (props) => {
    return (
        <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
        >What Should I do?</button>
    </div>
    )
}

// class Options extends React.Component {

//     render(){
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All Button</button>
//             {
//                 this.props.options.map(option =>  <Option key={option} option={option} />)
//             }
//         </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All Button</button>
            {props.options.length === 0 && <p>Add some options</p>}
            {
                props.options.map(option =>  
                <Option 
                    key={option} 
                    handleDeleteSpecificOption={props.handleDeleteSpecificOption} 
                    option={option} 
                />)
            }
        </div>
    )
}

// class Option extends React.Component {
//     render(){
//         return(
//             <div>
//                 {this.props.option}
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button onClick={(e) => props.handleDeleteSpecificOption(props.option)}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this) 
        this.state = {
            error: undefined
        }
    }

    handleAdd(e){
        e.preventDefault();
        const option = e.target.option.value.trim();
        
        const error = this.props.handleAddOption(option)
        // this.setState(() => {
        //     return {
        //         error
        //     }
        // })
         this.setState(() => (
            {
                error
            }
         ))

         if(!error){
             e.target.option.value = ""
         }
    }
    render(){
        return (
        <div>
            {
                this.state.error ? <p style={{color: "red"}}>{this.state.error}</p> : null
            }
            <form onSubmit={this.handleAdd}>
                <input type="text" name="option"/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

// const User = () => {
//     return (
//         <div>
//             <p>Name: </p>
//             <p>Age: </p>
//         </div>
//     )
// }
ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))