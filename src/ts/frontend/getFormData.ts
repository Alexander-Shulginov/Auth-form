import { InputData } from './types';

export const getFormData = (event: Event) => {
    const data = new FormData(event.target as HTMLFormElement);
    return Object.fromEntries(data.entries()) as InputData;
};
