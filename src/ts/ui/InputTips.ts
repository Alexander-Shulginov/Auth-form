export class InputTips {
    private cssTipsHidden: string;

    constructor() {
        this.cssTipsHidden = 'input__tip--hidden';
    }

    public inputIsEmpty(input: HTMLInputElement): boolean {
        return input.value.length >= 1;
    }

    private getActiveElem(input: HTMLInputElement) {
        const elemAttribut = input.getAttribute('id');
        return document.querySelector(`[for="${elemAttribut}"]`);
    }

    public showTip(input: HTMLInputElement) {
        this.getActiveElem(input).classList.add(this.cssTipsHidden);
    }

    public hideTip(input: HTMLInputElement) {
        this.getActiveElem(input).classList.remove(this.cssTipsHidden);
    }

    public hideAllTip(input: HTMLInputElement) {
        input.classList.remove(this.cssTipsHidden);
    }
}
