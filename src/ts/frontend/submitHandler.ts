import getFormData from './getFormData';
import errorHadler from './errorHandler';
import { dataValidation, mailValidation, nameValidation, passwordValidation } from './formValidation';

export default function submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const data = getFormData(event);
    const dataIsValid = dataValidation(data);

}

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
