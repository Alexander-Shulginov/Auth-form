import { InputData, PasswordInput } from '../types';

import { showError } from './showError';
import { hideError } from './hideError';
import { passwordIsValid } from '../dataValidation/passwordIsValid';

export const passwordErrorHandler = (data: InputData, event: Event): void => {
    const target = event.target as HTMLElement;
    const errorPassElem: HTMLElement = target.querySelector(`[${PasswordInput.errorElem}]`);

    !passwordIsValid(data) ? showError(errorPassElem, PasswordInput.errorText) : hideError(errorPassElem);
};
