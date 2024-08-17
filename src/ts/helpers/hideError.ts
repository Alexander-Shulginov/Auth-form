export function hideError(el: HTMLElement): void {
    const cssErrorClass: string = 'error--active';
    el.classList.remove(cssErrorClass);
}
