import { showError } from '../../helpers/showError';
import { signInForm } from '../../frontend/types';
import { inputIsNotEmpty } from '../../helpers/inputIsNotEmpty';
import { hideError } from '../../helpers/hideError';

export default function mailIsValid(): boolean {
    const mailInput = document.getElementById(signInForm.mail) as HTMLInputElement;
    const mailError = document.getElementById(signInForm.mailError) as HTMLElement;

    // if (!mailInput) throw new Error(`#${id} not found`);

    hideError(mailError);
    showError(mailError);

    const mailRegExp: RegExp = /@/;

    // inputIsNotEmpty(mailInput) ? 1 : return;

    return mailRegExp.test(mailInput.value);
}
