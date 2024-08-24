import { InputData } from '../types';

export const mailIsValid = (data: InputData): boolean => {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    return mailRegExp.test(data.mail);
};
