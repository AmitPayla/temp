import React from 'react';

const Input = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case 'input':
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred}></input>
            break;
        case 'textarea':
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred}></textarea>
            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred}></input>
            break;
    }
    return (
    <>
        {inputElement}
    </>
    );
}

export default Input; 