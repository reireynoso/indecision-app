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
    render(){
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer!"
        const options = ["Thing 1", "Thing 2", "Thing 3"]
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick(){
        alert('clicked')
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll(){
        console.log(this.props.options)
    }

    render(){
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All Button</button>
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
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.option.value.trim();
        if(option){
            console.log(option) 
       }
    }
    render(){
        return (
        <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <input type="submit"/>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))