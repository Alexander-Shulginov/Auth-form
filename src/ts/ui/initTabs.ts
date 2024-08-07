import { animationSignIn, animationSignUp } from './gsapAnimation';

export default function initTabs(): void {
    const signIn = document.querySelector('.form__sign-in') as HTMLElement | null;
    const signUp = document.querySelector('.form__sign-up') as HTMLElement | null;
    const frame = document.querySelector('.form__frame') as HTMLElement | null;
    const tabIn = document.querySelector('.form__tab-in') as HTMLElement | null;
    const tabUp = document.querySelector('.form__tab-up') as HTMLElement | null;

    const cssNavActive: string = 'form__nav--active';
    const cssTabActive: string = 'form__tab--active';
    const cssFrameTransform: string = 'form__frame--transform';

    if (!signIn || !signUp || !frame || !tabIn || !tabUp) return;

    function toggleTabs(isSignInActive: boolean): void {
        frame.classList.toggle(cssFrameTransform, !isSignInActive);

        signIn.classList.toggle(cssNavActive, isSignInActive);
        signUp.classList.toggle(cssNavActive, !isSignInActive);

        tabIn.classList.toggle(cssTabActive, isSignInActive);
        tabUp.classList.toggle(cssTabActive, !isSignInActive);

        isSignInActive ? animationSignIn() : animationSignUp();
    }

    signIn.addEventListener('click', () => toggleTabs(true));
    signUp.addEventListener('click', () => toggleTabs(false));
}
