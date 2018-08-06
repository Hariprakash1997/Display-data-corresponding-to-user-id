import React from 'react';
import { reduxForm, Field } from 'redux-form';

let ReduxForm  = () => 
    <form>
        <div>
            <label>First Name</label>
            <Field name="firstname" component="input" />
        </div>
    </form>

ReduxForm = reduxForm({
    form: 'demo'
})(ReduxForm)

export default ReduxForm;