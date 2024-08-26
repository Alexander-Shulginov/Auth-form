import { tips } from '..';

export const toggleSuccessMsg = () => {
    const formElem: HTMLElement = document.querySelector('.form');
    const inputElems = document.querySelectorAll('.input__tip');
    const cssSuccessActive: string = 'form--success';
    if (formElem) {
        formElem.classList.add(cssSuccessActive);

        setTimeout(() => {
            formElem.classList.remove(cssSuccessActive);
        }, 4000);

        inputElems.forEach((el: HTMLInputElement) => {
            tips.hideAllTip(el);
        });

        setTimeout(() => {
            inputElems.forEach((el: HTMLInputElement) => {
                tips.showTip(el);
            });
        }, 4000);
    }
};
