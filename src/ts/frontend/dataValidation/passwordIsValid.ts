import { InputData, PasswordInput } from '../types';

export const passwordIsValid = (data: InputData): boolean => {
    if (data.hasOwnProperty('password')) {
        return data.password.length > PasswordInput.passLength;
    }
};
