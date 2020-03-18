import React from 'react'
import Option from './Option'
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

export default Options