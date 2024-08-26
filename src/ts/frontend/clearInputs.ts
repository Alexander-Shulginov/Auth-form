export const clearInputs = (): void => {
    const inputs: NodeListOf<HTMLElement> = document.querySelectorAll('input');

    inputs.forEach((input: HTMLInputElement): void => {
        input.value = null;
    });
};
