import React from 'react';


const TextInput = ({value, onChange}) => {

    return(
            <input type="text" className="input-text" 
            value={value}
            onChange={(event) => onChange(event)}
            />
    )
}

export default TextInput;