import React from 'react'
import CheckMark from '../svgs/CheckMark'

const Input = (props) => (
    <div>

        <label>{props.inputLabel}{props.inputRequired ? "*":null}</label>

        <div className={`inputWrap${props.inputIsValid ? " inputError" : ''}`}>

            <select 
                defaultValue="" 
                value={props.currentValue} 
                name={props.inputName} 
                onChange={props.onChange} 
                required={props.inputRequired}>

                <option value="" disabled>Please select your {props.inputLabel}</option>
                {props.selectOptions.map((option) => 
                    <option key={option}>{option}</option>
                )}

            </select>

            <span className="inputValid__check"><CheckMark /></span>

        </div>

        {props.inputIsValid ?
            props.errorMessage
        :null}

    </div>
);

export default Input;