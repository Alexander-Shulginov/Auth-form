import { signInData, signInForm, signUpForm } from './types';
import { dataIsValid } from './validation/dataIsValid';

import nameValid from './validation/name';
import passwordValidation from './validation/password';

export default function getData(): void {
    const formSignIn = document.getElementById(signInForm.form) as HTMLFormElement;

    if (!formSignIn) throw new Error(`#${signInForm.form} not found`);

    let formData: signInData;

    const getFormData = (form: HTMLFormElement): signInData => {
        const formData = new FormData(form);
        return Object.fromEntries(formData.entries()) as signInData;
    };

    const submitHandler = (event: SubmitEvent): void => {
        event.preventDefault();
        formData = getFormData(event.target as HTMLFormElement);
        dataIsValid();
        passwordValidation(signInForm.password);
        nameValid(signUpForm.name);
    };

    formSignIn.addEventListener('submit', submitHandler);
}
