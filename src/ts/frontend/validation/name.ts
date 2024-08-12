import { signUpForm } from '@/frontend/types';

export default function nameValid(id: signUpForm.name): boolean {
    const inputElem = document.getElementById(`${id}`) as HTMLInputElement;

    if (!inputElem) throw new Error(`#${id} not found`);
    const namePattern: RegExp = /^[a-zA-Z0-9]*$/;

    // input.addEventListener('input', () => {
    //     if (!namePattern.test(input.value)) {
    //         input.value = input.value.replace(/[^a-zA-Z0-9]/g, '');
    //     }
    // });

    return true;
}
