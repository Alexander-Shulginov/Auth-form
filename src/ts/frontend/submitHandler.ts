import { signInData, signInForm, signUpForm } from './types';

import passwordIsValid from './validation/passwordValidation';
import nameValidation from './validation/nameValidation';
import getFormData from './getFormData';
import mailValidation from './validation/mailValidation';
import errorHadler from './validation/errorHandler';

export default function submitHandler(event: SubmitEvent): void {
    event.preventDefault();
    const data = getFormData(event);

    errorHadler(data);
    console.log(mailValidation(data.mail));

    const clickHandler = (event: SubmitEvent): void => {
        // mailIsValid();
        passwordIsValid();

        nameValidation();
    };
}

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
