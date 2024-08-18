import { signUpForm } from '../types';

export default function nameValidation(): boolean {
    const inputElem = document.getElementById(signUpForm.name) as HTMLInputElement;

    if (!inputElem) throw new Error(`#${signUpForm.name} not found`);
    const namePattern: RegExp = /^[a-zA-Z0-9]*$/;

    inputElem.addEventListener('input', () => {
        if (!namePattern.test(inputElem.value)) {
            inputElem.value = inputElem.value.replace(/[^a-zA-Z0-9]/g, '');
        }
    });

    return true;
}
