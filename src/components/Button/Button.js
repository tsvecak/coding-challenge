import React from 'react'

const Button = (props) => (
    <button
        className={`btn ${props.buttonType}`}
        onClick={props.onClick}
    >
        {props.text}
    </button>
);

export default Button;