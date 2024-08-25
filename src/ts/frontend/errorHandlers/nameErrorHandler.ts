import { InputData, NameInput } from '../types';

import { showError } from './showError';
import { hideError } from './hideError';
import { nameIsValid } from '../dataValidation/nameIsValid';

export const nameErrorHandler = (data: InputData, event: Event): void => {
    const target = event.target as HTMLElement;
    const errorNameElem: HTMLElement = target.querySelector(`[${NameInput.errorElem}]`);

    !nameIsValid(data) ? showError(errorNameElem, NameInput.errorText) : hideError(errorNameElem);
};
