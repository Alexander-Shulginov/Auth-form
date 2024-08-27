import { tips } from '../index';

export const toggleTips = (): void => {
    const inputElems: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input__field');
    
    if (!inputElems) return;

    inputElems.forEach((input: HTMLInputElement) => {
        input.addEventListener('input', () => {
            tips.inputIsEmpty(input) ? tips.showTip(input) : tips.hideTip(input);
        });
    });
};
