export default function togglePlaceholder(): void {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input__field');
    const tips: NodeListOf<HTMLElement> = document.querySelectorAll('.input__tip');
    const cssTipsHidden: string = 'input__tip--hidden';

    function inputIsNotEmpty(input: HTMLInputElement): boolean {
        return input.value.length === 0;
    }

    function hideTips(index: number): void {
        tips[index].classList.add(cssTipsHidden);
    }

    function showTips(index: number): void {
        tips[index].classList.remove(cssTipsHidden);
    }

    inputs.forEach((input: HTMLInputElement, index: number) => {
        input.addEventListener('input', () => {
            inputIsNotEmpty(input) ? showTips(index) : hideTips(index);
        });
    });
}
