import { InputData } from '../types';
import { mailIsValid } from './mailIsValid';
import { nameIsValid } from './nameIsValid';
import { passwordIsValid } from './passwordIsValid';

export const dataIsValid = (data: InputData): boolean => {
    const validators = [];

    if (data.hasOwnProperty('mail')) {
        validators.push(mailIsValid);
    }

    if (data.hasOwnProperty('password')) {
        validators.push(passwordIsValid);
    }

    if (data.hasOwnProperty('name')) {
        validators.push(nameIsValid);
    }

    return validators.every((validator) => validator(data));
};
