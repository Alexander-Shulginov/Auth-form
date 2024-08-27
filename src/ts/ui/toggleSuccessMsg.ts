import { tips } from '..';

export const toggleSuccessMsg = () => {
    const formElem: HTMLElement = document.querySelector('.form');
    const tipElems: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input__tip');
    const cssSuccessActive: string = 'form--success';

    if (!formElem) return;

    formElem.classList.add(cssSuccessActive);

    setTimeout(() => {
        formElem.classList.remove(cssSuccessActive);
        tipElems.forEach((i) => {
            tips.showAllTip(i);
        });
    }, 4000);
};
