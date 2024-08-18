import { showError } from '../../helpers/showError';
import { signInForm } from '../types';
import { hideError } from '../../helpers/hideError';

export default function passwordIsValid(): boolean {
    const passwordInput = document.getElementById(signInForm.password) as HTMLInputElement;
    if (!passwordInput) throw new Error(`#${signInForm.password} not found`);

    const passwordError = document.getElementById(signInForm.passwordError) as HTMLElement;
    if (!passwordError) throw new Error(`#${signInForm.passwordError} not found`);

    const passwordValid: boolean = passwordInput.value.length < 6;

    passwordValid
        ? showError(passwordError, signInForm.passwordErrorText)
        : hideError(passwordError);

    return passwordValid;
}
