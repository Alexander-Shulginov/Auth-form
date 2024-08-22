import { signInData, signInForm } from '../frontend/types';

export default function errorHadler(event: Event) {
    console.log(event.target);
    const mailError = document.getElementById(signInForm.mailError) as HTMLElement;
    if (!mailError) throw new Error(`#${signInForm.mailError} not found`);
}
