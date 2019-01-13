import React from 'react';

import {
    Redirect
} from 'react-router-dom';

const ThankYou = props => {
    if(props.fName) {
        return (
            <div className="mwg-wrap">
                <h2>Thank you {props.fName} {props.lName} for signing up</h2>
                <p>Our support team will be in contact with you very shortly.</p>
            </div>
        )
    } else {
        return <Redirect to="/"/>
    }
};

export default ThankYou;