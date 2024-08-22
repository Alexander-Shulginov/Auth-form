import getFormData from './getFormData';
import errorHadler from './errorHandler';
import { mailValidation, nameValidation, passwordValidation } from './formValidation';

export default function submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const data = getFormData(event);
    console.log(data);

    data.name in data ? nameValidation(data.name) : errorHadler(event);
    data.mail in data ?? mailValidation(data.mail);
    data.password in data ?? passwordValidation(data.password);
}

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
