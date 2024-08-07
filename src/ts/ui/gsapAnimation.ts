import { gsap } from 'gsap';

enum cardName {
    singIn = 'gsap-anim-in',
    singUp = 'gsap-anim-up',
}

interface AnimOpts {
    opacity?: number;
    stagger?: number;
    duration: number;
}

const animationOptions: AnimOpts = {
    opacity: 0,
    stagger: 0.12,
    duration: 0.55,
};

export function animationSignIn(): void {
    const itemsIn: HTMLElement[] = gsap.utils.toArray(`[${cardName.singIn}]`);
    gsap.from(itemsIn, animationOptions);
}

export function animationSignUp(): void {
    const itemsUp: HTMLElement[] = gsap.utils.toArray(`[${cardName.singUp}]`);
    gsap.from(itemsUp, animationOptions);
}
