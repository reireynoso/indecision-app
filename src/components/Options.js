import React from 'react'
import Option from './Option'
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}
            >
            Remove All Button
            </button>
            {
                props.options.map(option =>  
                    <Option 
                    key={option} 
                    handleDeleteSpecificOption={props.handleDeleteSpecificOption} 
                    option={option} 
                    />)
                }
            </div>    
        {props.options.length === 0 && <p className="widget-p__message">Add some options</p>}
    </div>
)


export default Options