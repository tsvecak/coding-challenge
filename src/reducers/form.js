import { FORM_SUBMIT } from '../actiontypes/form';

const initialState = {
    fieldValues : [],
    formFields : [
        {
            label: "First Name",
            name: "fname",
            type: "text",
            required: true,
            placeholder: "First Name",
            errorMessage: "This field is required."
        },
        {
            label: "Surame",
            name: "lname",
            type: "text",
            required: true,
            placeholder: "Surname",
            errorMessage: "This field is required."
        },
        {
            label: "Date of Birth",
            name: "dob",
            type: "date",
            required: true,
            placeholder: "01/11/1991",
            errorMessage: "This field is required."
        },
        {
            label: "Nationality",
            name: "nationality",
            type: "select",
            selectOptions: [
                "Irish",
                "American",
                "Marsian",
            ],
            defaultValue: 0,
            required: true,
            errorMessage: "This field is required."
        },
        {
            label: "Email Address",
            name: "email",
            type: "email",
            required: true,
            placeholder: "hello@email.com",
            errorMessage: "This field is required."
        },
        {
            label: "Occupation",
            name: "occupation",
            type: "text",
            required: false,
            placeholder: "Front End Developer",
            errorMessage: "This field is required."
        },
    ]
}

export default function Form(state=initialState, action) {

    switch (action.type) {
        case FORM_SUBMIT:
            action.event.preventDefault()

            state.fieldValues = action.values
        
            return state

        default:
        return state;
    }

}