export function showError(el: HTMLElement, msg: string): void {
    const cssErrorClass: string = 'error--active';

    if (!el.classList.contains(cssErrorClass)) {
        el.textContent = msg;
    }

    el.classList.add(cssErrorClass);
}
