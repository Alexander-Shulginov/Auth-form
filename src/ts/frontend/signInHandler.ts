import { signInData, signInForm } from './types';

import mailIsValid from './validation/mailValidation';
import passwordIsValid from './validation/passwordValidation';
import nameValidation from './validation/nameValidation';

export default function formData(): void {
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

        mailIsValid();
        passwordIsValid();

        nameValidation();
    };

    formSignIn.addEventListener('submit', submitHandler);
}
