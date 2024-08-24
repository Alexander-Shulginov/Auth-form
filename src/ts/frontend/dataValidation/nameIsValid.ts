import { InputData, NameInput } from '../types';

export const nameIsValid = (data: InputData): boolean => {
    if (data.hasOwnProperty('name')) {
        return data.name.length > NameInput.nameLength;
    }
};
