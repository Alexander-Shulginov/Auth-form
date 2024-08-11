import mailValidation from './validation/mailValid';
import nameValid from './validation/nameValid';
import passwordValidation from './validation/passwordValid';

export interface signInData {
    [key: string]: string;
}

export const enum formElem {
    mail = 'user-in-mail',
    password = 'user-in-password',
}

export default function getData(): void {
    const formSignIn = document.getElementById('form-sign-in') as HTMLFormElement;

    if (!formSignIn) throw new Error('#form-sign-in not found');

    let formData: signInData;

    const getFormData = (form: HTMLFormElement): signInData => {
        const formData = new FormData(form);
        return Object.fromEntries(formData.entries()) as signInData;
    };

    const submitHandler = (event: SubmitEvent): void => {
        event.preventDefault();
        formData = getFormData(event.target as HTMLFormElement);
        mailValidation(formElem.mail);
        passwordValidation(formElem.password);
        nameValid();
    };

    formSignIn.addEventListener('submit', submitHandler);
}
