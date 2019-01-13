import React, { Component } from 'react';

import {
    withRouter
} from 'react-router-dom';

import Input from './Input';
import Select from './Select';
import DatePicker from 'react-date-picker'
import CheckMark from '../svgs/CheckMark'

class Form extends Component {

    state = {
        fieldValues: [],
        requiredFields: {},
        fieldErrors: [],
        formSubmitting: false
    }

    componentWillMount() {
        // Get required fields
        let requiredFields = [],
            fieldErrors = {}
        for (let index = 0; index < this.props.formData.formFields.length; index++) {
            const input = this.props.formData.formFields[index];
            if(input.required) {
                requiredFields.push(input.name)
                fieldErrors[input.name] = false
            }
        }
        this.setState({requiredFields,fieldErrors})
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.type && target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            fieldValues: Object.assign({}, this.state.fieldValues,{
                [name]: value,
            }),
        });

        // Select input change update validation
        if(target.type === 'select-one') {
            this.setState({
                fieldErrors: Object.assign({}, this.state.fieldErrors,{
                    [name]: false,
                }),
            });
        }

    }

    handleDateChange = date => {
        this.setState({
            fieldValues: Object.assign({}, this.state.fieldValues,{
                dob: date,
            }),
            fieldErrors: Object.assign({}, this.state.fieldErrors,{
                dob: false,
            }),
        });
    }

    handleOnBlur = e => {
        let target = e.target,
            value = target.value,
            name = target.name,
            isRequired = target.required

        if(isRequired) {
            if(value && !/^\s*$/.test(value)) {
                this.setState({
                    fieldErrors: Object.assign({}, this.state.fieldErrors,{
                        [name]: false,
                    }),
                });
                target.classList.add('inputValid')
            } else {
                this.setState({
                    fieldErrors: Object.assign({}, this.state.fieldErrors,{
                        [name]: true,
                    }),
                });
                target.classList.remove('inputValid')
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        let { fieldValues, requiredFields } = this.state,
            invalidFields = []

        // Only validate required fields
        for (let index = 0; index < requiredFields.length; index++) {
            const element = requiredFields[index];
            
            if(!fieldValues[element]) {
                
                this.setState(prevState => ({
                    fieldErrors: {
                        ...prevState.fieldErrors,
                        [element]: true
                    }
                }))

                invalidFields.push({element})
            } else {
                this.setState(prevState => ({
                    fieldErrors: {
                        ...prevState.fieldErrors,
                        [element]: false
                    }
                }))
                let index = invalidFields.indexOf(element);
                if (index > -1) {
                    invalidFields.splice(index, 1);
                }
            }
            
        }
        if (invalidFields.length === 0) {
            this.props.formSubmit(e, fieldValues)
            this.setState({formSubmitting:true})
            setTimeout(() => {
                let path = `/thank-you`;
                this.props.history.push(path); 
            }, 2000);
        } else {
            console.log('Form Error')
        }
    
    }

    render() {
        return (
            <div className="mwg-wrap form">
                <form onSubmit={this.handleSubmit} noValidate>
                    {this.props.formData.formFields.map((input) => {
                        let isValid = this.state.fieldErrors[input.name]
                        if(input.type === "text" || input.type === "email") {
                            return (
                                <Input
                                    key={input.label}

                                    inputName={input.name}
                                    inputType={input.type}
                                    inputLabel={input.label}
                                    inputRequired={input.required}
                                    inputPlaceholder={input.placeholder}
                                    errorMessage={input.errorMessage}
                                    inputIsValid={isValid}
                                    selectOptions={input.selectOptions}

                                    onChange={this.handleInputChange}
                                    onBlur={(e) => this.handleOnBlur(e)}
                                />
                            )
                        } else if (input.type === "select") {
                            return (
                                <Select 
                                    key={input.label}

                                    inputName={input.name}
                                    inputType={input.type}
                                    inputLabel={input.label}
                                    inputRequired={input.required}
                                    errorMessage={input.errorMessage}
                                    inputIsValid={isValid}
                                    currentValue={this.state[input.name]}
                                    selectOptions={input.selectOptions}

                                    onChange={this.handleInputChange}
                                    onBlur={(e) => this.handleOnBlur(e)}
                                />
                            )
                        } else if (input.type === "date") {
                            return (
                                <div key={input.label}>
                                    <label>{input.label}</label>

                                    <div className={`inputWrap${isValid ? " inputError" : ''}`}>

                                        <DatePicker 
                                            onChange={this.handleDateChange}
                                            value={this.state.fieldValues.dob}
                                            className={isValid ? 'inputError' : ''}
                                        />

                                        <span className="inputValid__check"><CheckMark /></span>

                                    </div>

                                    {this.state.fieldErrors[input.name] ?
                                        input.errorMessage
                                    :null}
                                </div>
                            )
                        } else {
                            return null;
                        }
                    })}
                    <input className="btn submit" type="submit" value="Submit" />
                </form>
                {this.state.formSubmitting ?
                    <div className="form__submitting">
                    <span className="loader">
                        <span className="left"><span className="anim"></span></span>
                        <span className="right"><span className="anim"></span></span>
                    </span>
                    </div>
                :null}
            </div>
        );
    }
}

export default withRouter(Form);