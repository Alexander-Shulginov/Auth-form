import { showError } from '../helpers/showError';
import { SignInData } from './types';
import { ErrorElems } from './types';
import { hideError } from '../helpers/hideError';

const enum ValidationOption {
    nameLength = 4,
    passwordLength = 6,
}

export const mailIsValid = (data: SignInData): boolean => {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    return mailRegExp.test(data.mail);
};

export function mailErrorHandler(data: SignInData, event: Event): void {
    const target = event.target as HTMLElement;
    const errorMailElem: HTMLElement = target.querySelector(`[${ErrorElems.mailError}]`);

    !mailIsValid(data) ? showError(errorMailElem, ErrorElems.mailErrorText) : hideError(errorMailElem);
}

export const passwordIsValid = (data: SignInData): boolean => {
    return data.password.length > ValidationOption.passwordLength;
};

export const passwordErrorHandler = (data: SignInData, event: Event): void => {
    const target = event.target as HTMLElement;
    const errorPassElem: HTMLElement = target.querySelector(`[${ErrorElems.passError}]`);

    !passwordIsValid(data) ? showError(errorPassElem, ErrorElems.passErrorText) : hideError(errorPassElem);
};

export const nameValidation = (data: string): boolean => {
    return data.length > ValidationOption.nameLength;
};
