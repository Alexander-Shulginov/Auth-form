import { mailErrorHandler } from './mailErrorHandler';
import { nameErrorHandler } from './nameErrorHandler';
import { passwordErrorHandler } from './passErrorHandler';
import { InputData } from '../types';

export const errorHandler = (data: InputData, event: Event) => {
    if (data.hasOwnProperty('mail')) mailErrorHandler(data, event);
    if (data.hasOwnProperty('name')) nameErrorHandler(data, event);
    if (data.hasOwnProperty('password')) passwordErrorHandler(data, event);
};
