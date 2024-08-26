import { tips } from '../index';

export const toggleTips = (): void => {
    const inputs = document.querySelectorAll('.input__field');

    inputs.forEach((input: HTMLInputElement) => {
        input.addEventListener('input', () => {
            tips.inputIsEmpty(input) ? tips.showTip(input) : tips.hideTip(input);
        });
    });
};
