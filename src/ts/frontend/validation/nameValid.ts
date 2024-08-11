export default function nameValid(): boolean {
    const input: HTMLInputElement = document.querySelector('.input__field');

    const namePattern: RegExp = /^[a-zA-Z0-9]*$/;

    input.addEventListener('input', () => {
        if (!namePattern.test(input.value)) {
            input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
        }
    });

    return true;
}
