import { toggleSuccessMsg } from '../ui/toggleSuccessMsg';
import { clearInputs } from './clearInputs';
import { dataIsValid } from './dataValidation/dataIsValid';
import { errorHandler } from './errorHandlers/errorHandler';
import { getFormData } from './getFormData';
import { sendData } from './sendData';
import { InputData } from './types';

export const submitHandler = (event: SubmitEvent): void => {
    event.preventDefault();
    const data: InputData = getFormData(event);
    const dataIsCorrect: boolean = dataIsValid(data);
    errorHandler(data, event);


    if (dataIsCorrect) {
        sendData(data);
        toggleSuccessMsg();
        clearInputs();
    }
};
