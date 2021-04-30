import React from 'react'
import InputContainer from './InputContainer'
import SubmitButton from './SubmitButton'

const FormContainer = (props) => {

    return(
        <div className="form-container">
            <form className="form" 
            onSubmit={props.onSubmit}>
                <InputContainer 
                type={props.type}
                options={props.options} 
                value={props.inputValue} 
                onChange={props.onChange}
                >

                </InputContainer>
                <SubmitButton
                disabled={props.disabled}
                ></SubmitButton>
            </form>
        </div>
    )

}

export default FormContainer;