import React from 'react'

const Option = (props) => (
    <div>
        {props.option}
        <button
        className="button button--link" 
        onClick={(e) => props.handleDeleteSpecificOption(props.option)}>Remove</button>
    </div>
)


export default Option