import React from 'react';


const RadioInput = (props) => {
    return(
        <label className="radio-label" htmlFor={props.option.toLowerCase()}>
            <input type="radio" className="input-radio" 
            name="gender" 
            value={props.option} 
            id={props.option.toLowerCase()}
            onChange={(event) => props.onChange(event)}
            />
            {props.option}
        </label>
    )
}

export default RadioInput;