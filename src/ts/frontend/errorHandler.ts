import { mailErrorHandler, passwordErrorHandler } from './formValidation';
import { SignInData } from './types';

export const errorHandler = (data: SignInData, event: Event) => {
    if (data.hasOwnProperty('mail')) mailErrorHandler(data, event);
    if (data.hasOwnProperty('password')) passwordErrorHandler(data, event);
};
