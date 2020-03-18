import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

export default class IndecisionApp extends React.Component {
    state= {
        options: []
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         options: []
    //     }
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleDeleteSpecificOption = this.handleDeleteSpecificOption.bind(this)
    // }

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

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }))
    }

    handleDeleteSpecificOption=(optionClicked)=>{
        // console.log(option)
        this.setState((prevState) => ({
            options: prevState.options.filter(option => option !== optionClicked)
        }))
    }

    handleAddOption=(option)=>{
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

    handlePick=()=>{
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