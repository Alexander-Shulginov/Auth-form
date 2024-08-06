import { gsap } from 'gsap';
export default function tabsInit() {
    const signIn: HTMLElement = document.querySelector('.form__sign-in');
    const signUp: HTMLElement = document.querySelector('.form__sign-up');
    const frame: HTMLElement = document.querySelector('.form__frame');
    const tabIn: HTMLDivElement = document.querySelector('.form__tab-in');
    const tabUp: HTMLDivElement = document.querySelector('.form__tab-up');
    const cssNavActive: string = 'form__nav--active';
    const cssTabActive: string = 'form__tab--active';
    const cssFrameTransform: string = 'form__frame--transform';

    if (!signIn && !signUp) return;

    signIn.addEventListener('click', (): void => {
        frame.classList.remove(cssFrameTransform);

        signIn.classList.add(cssNavActive);
        signUp.classList.remove(cssNavActive);

        tabIn.classList.add(cssTabActive);
        tabUp.classList.remove(cssTabActive);
        animationSignIn();
    });

    signUp.addEventListener('click', (): void => {
        frame.classList.add(cssFrameTransform);

        signIn.classList.remove(cssNavActive);
        signUp.classList.add(cssNavActive);

        tabIn.classList.remove(cssTabActive);
        tabUp.classList.add(cssTabActive);
        animationSignUp();
    });

    function animationSignIn() {
        const itemsIn = gsap.utils.toArray('[gsap-anim-in]');
        gsap.from(itemsIn, {
            opacity: 0,
            stagger: 0.12,
            duration: 0.55,
        });
    }

    function animationSignUp() {
        const itemsUp = gsap.utils.toArray('[gsap-anim-up]');
        gsap.from(itemsUp, {
            opacity: 0,
            stagger: 0.12,
            duration: 0.55,
        });
    }
}
