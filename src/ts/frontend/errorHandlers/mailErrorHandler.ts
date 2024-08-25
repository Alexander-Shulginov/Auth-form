import { EmailInput } from '../types';
import { InputData } from '../types';

import { showError } from './showError';
import { hideError } from './hideError';
import { mailIsValid } from '../dataValidation/mailIsValid';

export const mailErrorHandler = (data: InputData, event: Event): void => {
    const target = event.target as HTMLElement;
    const errorMailElem: HTMLElement = target.querySelector(`[${EmailInput.errorElem}]`);

    !mailIsValid(data) ? showError(errorMailElem, EmailInput.errorText) : hideError(errorMailElem);
};
