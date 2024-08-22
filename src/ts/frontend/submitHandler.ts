import getFormData from './getFormData';
import errorHadler from './errorHandler';
import { mailValidation, passwordValidation } from './formValidation';

export default function submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const data = getFormData(event);

    errorHadler(data);
    console.log(mailValidation(data.mail));
    console.log(passwordValidation(data.password));
}

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
