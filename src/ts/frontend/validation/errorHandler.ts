import { signInData, signInForm } from '../../frontend/types';

export default function errorHadler(data: signInData) {
    const mailError = document.getElementById(signInForm.mailError) as HTMLElement;
    if (!mailError) throw new Error(`#${signInForm.mailError} not found`);

    console.log(document.querySelector(`[name=mail]`));
}
