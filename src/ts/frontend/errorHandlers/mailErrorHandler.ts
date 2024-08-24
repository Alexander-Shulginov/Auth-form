import { EmailInput } from '../types';
import { InputData } from '../types';

import { showError } from '../../helpers/showError';
import { hideError } from '../../helpers/hideError';
import { mailIsValid } from '../dataValidation/mailIsValid';

export const mailErrorHandler = (data: InputData, event: Event): void  => {
    const target = event.target as HTMLElement;
    const errorMailElem: HTMLElement = target.querySelector(`[${EmailInput.errorElem}]`);

    !mailIsValid(data)
        ? showError(errorMailElem, EmailInput.errorText)
        : hideError(errorMailElem);
}