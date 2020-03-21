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
            </div>    
        {props.options.length === 0 && <p className="widget-p__message">Add some options</p>}
        {
            props.options.map((option,index) =>  
                <Option 
                key={option} 
                count={index + 1}
                handleDeleteSpecificOption={props.handleDeleteSpecificOption} 
                option={option} 
                />)
        }
    </div>
)


export default Options