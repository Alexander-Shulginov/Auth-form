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
    // const cssTab

    if (!signIn && !signUp) return;

    signIn.addEventListener('click', (): void => {
        frame.classList.remove(cssFrameTransform);

        signIn.classList.add(cssNavActive);
        signUp.classList.remove(cssNavActive);

        tabIn.classList.add(cssTabActive);
        tabUp.classList.remove(cssTabActive);
        testUp();
    });

    signUp.addEventListener('click', (): void => {
        frame.classList.add(cssFrameTransform);

        signIn.classList.remove(cssNavActive);
        signUp.classList.add(cssNavActive);

        tabIn.classList.remove(cssTabActive);
        tabUp.classList.add(cssTabActive);
        testIn();
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(1);
                }
            });
        },
        { threshold: 0 }
    );

    observer.observe(document.querySelector('.form__tab--active'));

    function testUp() {
        const itemsIn = gsap.utils.toArray('[gsap-anim-in]');
        gsap.from(itemsIn, {
            x: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.25,
        });
    }

    function testIn() {
        const itemsUp = gsap.utils.toArray('[gsap-anim-up]');
        gsap.from(itemsUp, {
            x: -50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.25,
        });
    }
}
