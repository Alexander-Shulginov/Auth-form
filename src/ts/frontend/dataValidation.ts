import { signInData } from './getData';

const inputIsEmpty = (data: string): boolean => {
    return data.length === 0;
};

const namePattern = /^[a-zA-Z0-9]*$/;

const input: HTMLInputElement = document.querySelector('.input__field');

input.addEventListener('input', () => {
    if (!namePattern.test(input.value)) {
        input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
    }
});

export const emailValidation = (data: signInData) => {
    console.log(inputIsEmpty(data.mail));
};
