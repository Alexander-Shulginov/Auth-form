import { errorHandler } from './errorHandler';
import { mailErrorHandler } from './formValidation';
import getFormData from './getFormData';

export default function submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const data = getFormData(event);
    errorHandler(data, event);
}

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
