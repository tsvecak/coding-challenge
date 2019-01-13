import React from 'react'
import CheckMark from '../svgs/CheckMark'

const Input = (props) => (
    <div>
        <label>{props.inputLabel}{props.inputRequired ? "*":null}</label>
        <div className={`inputWrap${props.inputIsValid ? " inputError" : ''}`}>
            <input 
                value={props.inputValue}
                type={props.type}
                name={props.inputName}
                placeholder={props.inputPlaceholder}

                required={props.inputRequired}

                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            <span className="inputValid__check"><CheckMark /></span>
        </div>
        {props.inputIsValid ?
            props.errorMessage
        :null}
    </div>
);

export default Input;