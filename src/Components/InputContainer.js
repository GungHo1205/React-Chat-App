/* eslint-disable no-lone-blocks */
import React from 'react';
import TextInput from './TextInput';
import RadioInput from './RadioInput';
import CheckboxInput from './CheckboxInput';

const InputContainer = (props) => {
    
    {if(props.type === 'text'){
        return (
            <div className="input-container">
                <TextInput value={props.inputValue} onChange={props.onChange}/>  
            </div>
        )
    }else if(props.type === 'radio'){
        let radioItems = []
        props.options.forEach((radio, index) => 
            radioItems.push(<RadioInput key={index} option={radio} onChange={props.onChange}></RadioInput>)
        )
        return(
            <div className="input-container">
                {radioItems}
            </div>
        )
    }else if(props.type === 'checkbox'){
        let checkboxItems = []
        props.options.forEach((checkbox, index) => 
            checkboxItems.push(<CheckboxInput 
                key={index}
                option={checkbox}
                onChange={props.onChange}
                ></CheckboxInput>)
        )
        return (
            <div className="input-container">
                {checkboxItems}
            </div>
        )
    }}


}
export default InputContainer;