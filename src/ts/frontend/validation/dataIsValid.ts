import { signInData } from '../getData';
import mailValidation from './mailValid';

export const inputIsEmpty = (data: string): boolean => {
    return data.length === 0;
};

export const dataIsValid = (data: signInData): boolean => {
    return true;
};
