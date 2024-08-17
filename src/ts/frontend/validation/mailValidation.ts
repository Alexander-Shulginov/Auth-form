import { showError } from '../../helpers/showError';
import { signInForm } from '../../frontend/types';
import { hideError } from '../../helpers/hideError';

export default function mailIsValid(): boolean {
    const mailInput = document.getElementById(signInForm.mail) as HTMLInputElement;
    if (!mailInput) throw new Error(`#${signInForm.mail} not found`);

    const mailError = document.getElementById(signInForm.mailError) as HTMLElement;
    if (!mailError) throw new Error(`#${signInForm.mailError} not found`);

    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    const mailIsValid = mailRegExp.test(mailInput.value);

    !mailIsValid
        ? showError(mailError, 'Invalid email')
        : hideError(mailError);

    return mailIsValid;
}
