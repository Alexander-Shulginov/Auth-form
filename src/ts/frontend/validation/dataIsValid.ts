import { signInData, signInForm } from '../types';
import mailIsValid from './mail';


export const dataIsValid = (): boolean => {
    mailIsValid(signInForm.mail);
    return true;
};
