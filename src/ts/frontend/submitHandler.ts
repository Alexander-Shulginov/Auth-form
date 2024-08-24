import { dataIsValid } from './dataValidation/dataIsValid';
import { errorHandler } from './errorHandlers/errorHandler';
import { getFormData } from './getFormData';

export const submitHandler = (event: SubmitEvent): void => {
    event.preventDefault();
    const data = getFormData(event);
    errorHandler(data, event);
    const dataIsCorrect = dataIsValid(data);
    console.log(dataIsCorrect);
};
