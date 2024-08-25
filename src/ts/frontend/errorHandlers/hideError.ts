export function hideError(el: HTMLElement): void {
    const cssErrorClass: string = 'error--active';
    el.textContent = '';
    el.classList.remove(cssErrorClass);
}
