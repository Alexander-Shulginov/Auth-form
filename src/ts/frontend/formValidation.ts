import errorHadler from './errorHandler';
import { SignInData } from './types';

const enum ValidationOption {
    nameLength = 4,
    passwordLength = 6,
}

export function mailValidation(data: string): boolean {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    return mailRegExp.test(data);
}

export function passwordValidation(data: string): boolean {
    return data.length > ValidationOption.passwordLength;
}

export function nameValidation(data: string): boolean {
    return data.length > ValidationOption.nameLength;
}

export function dataValidation(data: SignInData) {
    data.name in data ? nameValidation(data.name) : errorHadler(event);
    data.mail in data ?? mailValidation(data.mail);
    data.password in data ?? passwordValidation(data.password);
}
