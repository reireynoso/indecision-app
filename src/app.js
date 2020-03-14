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
            options: ["Thing 1", "Thing 2", "Thing 3"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOption(option){
        this.setState((prevState) => {
            return {
                options: [...prevState.options, option] 
            }
        })
    }

    handlePick(){
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random]
        alert(option)
    }

    render(){
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer!"
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={ this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render(){
        return (
        <div>
            <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
            >What Should I do?</button>
        </div>
        )
    }
}

class Options extends React.Component {

    render(){
        return (
        <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All Button</button>
            {
                this.props.options.map(option =>  <Option key={option} option={option} />)
            }
        </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                {this.props.option}
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this) 
    }

    handleAdd(e){
        e.preventDefault();
        const option = e.target.option.value.trim();
        if(option){
            this.props.handleAddOption(option)
       }
    }
    render(){
        return (
        <div>
            <form onSubmit={this.handleAdd}>
                <input type="text" name="option"/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))