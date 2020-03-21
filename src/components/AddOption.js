import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    // constructor(props){
    //     super(props)
    //     this.handleAdd = this.handleAdd.bind(this) 
    //     this.state = {
    //         error: undefined
    //     }
    // }

    handleAdd = (e) => {
        e.preventDefault();
        const option = e.target.option.value.trim();
        // console.log(testing)
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
                <button className="button">Add Option</button>
            </form>
        </div>
        )
    }
}