import { InputData } from './types';

export const enum FetchOption {
    endPoint = '/submit-form',
    method = 'POST',
    type = 'application/json',
}

export const sendData = (data: InputData) => {
    const params = {
        method: FetchOption.method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': FetchOption.type,
        },
    };

    fetch(FetchOption.endPoint, params)
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        });
};
