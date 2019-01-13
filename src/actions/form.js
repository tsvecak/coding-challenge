import { FORM_SUBMIT } from '../actiontypes/form';

export const formSubmit = (event, values) => {
    return {
        type: FORM_SUBMIT,
        event,
        values
    }
}
