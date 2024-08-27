export class InputTips {
    private cssTipsHidden: string;

    constructor() {
        this.cssTipsHidden = 'input__tip--hidden';
    }

    private getActiveElem(input: HTMLInputElement) {
        const elemAttribut = input.getAttribute('id');
        return document.querySelector(`[for="${elemAttribut}"]`);
    }

    public inputIsEmpty(input: HTMLInputElement): boolean {
        return input.value.length >= 1;
    }

    public showTip(input: HTMLInputElement) {
        this.getActiveElem(input).classList.add(this.cssTipsHidden);
    }

    public hideTip(input: HTMLInputElement) {
        this.getActiveElem(input).classList.remove(this.cssTipsHidden);
    }

    public showAllTip(input: HTMLInputElement) {
        input.classList.remove(this.cssTipsHidden);
    }
}
