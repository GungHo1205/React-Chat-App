import React from 'react'


const SubmitButton = (props) => {
    return(
        <div>
            <input 
            type="submit" 
            value="send" 
            className="submit-button" 
            disabled={props.disabled}
            // onClick={props.onClick}
            />
        </div>
    )
}

export default SubmitButton;