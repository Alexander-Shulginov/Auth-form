import { signInForm } from '@/frontend/types';

export default function mailIsValid(id: signInForm.mail): boolean {
    const mailInput = document.getElementById(`${id}`) as HTMLInputElement;

    if (!mailInput) throw new Error(`#${id} not found`);

    const mailRegExp: RegExp = /@/;

    return mailRegExp.test(mailInput.value);
}
