import { emailValidation } from './dataValidation';

export interface signInData {
    [key: string]: string;
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
        emailValidation(formData);
    };

    formSignIn.addEventListener('submit', submitHandler);
}
