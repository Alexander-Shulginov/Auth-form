import { signInData } from './types';

export default function getFormData(event: Event) {
    const formData = new FormData(event.target as HTMLFormElement);
    return Object.fromEntries(formData.entries()) as signInData;
}
