import React from 'react';


const CheckboxInput = (props) => {
    return(
        <label className="checkbox-label" htmlFor={props.option.toLowerCase()}>
            <input type="checkbox" className="input-checkbox" 
            name="hobbies" 
            value={props.option} 
            id={props.option.toLowerCase()}
            onChange={(event) => props.onChange(event)}
            />
            {props.option}
        </label>
    )
}

export default CheckboxInput;