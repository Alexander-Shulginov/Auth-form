export default function togglePasswordVisibility() {
    const btn: HTMLButtonElement = document.querySelector('.input__btn');
    const passwordInput: HTMLInputElement = document.querySelector('[data-input-password]');
    const cssBtnIsActive: string = 'input__btn--active';
    const cssBtnIsVisible: string = 'input__btn--visible';

    function inputIsEmpty(): boolean {
        return passwordInput.value.length === 0;
    }

    function btnIsActive(): boolean {
        return btn.classList.contains(cssBtnIsActive);
    }

    function showPassword(): void {
        passwordInput.setAttribute('type', 'text');
    }

    function hidePassword(): void {
        passwordInput.setAttribute('type', 'password');
    }

    function toggleBtnActive(): void {
        btn.classList.toggle(cssBtnIsActive);
    }

    function hideBtn(): void {
        btn.classList.remove(cssBtnIsVisible);
    }

    function showBtn(): void {
        btn.classList.add(cssBtnIsVisible);
    }

    btn.addEventListener('click', (): void => {
        toggleBtnActive();
        btnIsActive() ? showPassword() : hidePassword();
    });

    passwordInput.addEventListener('input', (): void => {
        inputIsEmpty() ? hideBtn() : showBtn();
    });

    passwordInput.addEventListener('focus', (): void => {
        if (!inputIsEmpty()) showBtn();
    });

    window.addEventListener('click', (event) => {
        if (!btn.contains(event.target as Node) && !passwordInput.contains(event.target as Node)) {
            hideBtn();
        }
    });
}
