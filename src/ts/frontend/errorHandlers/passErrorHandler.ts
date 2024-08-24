import { InputData, PasswordInput } from '../types';

import { showError } from '../../helpers/showError';
import { hideError } from '../../helpers/hideError';
import { passwordIsValid } from '../dataValidation/passwordIsValid';

export const passwordErrorHandler = (data: InputData, event: Event): void => {
    const target = event.target as HTMLElement;
    const errorPassElem: HTMLElement = target.querySelector(`[${PasswordInput.errorElem}]`);

    !passwordIsValid(data)
        ? showError(errorPassElem, PasswordInput.errorText)
        : hideError(errorPassElem);
};
