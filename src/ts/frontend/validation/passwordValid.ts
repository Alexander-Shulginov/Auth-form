export default function passwordValidation(id: string) {
    const mailInput = document.getElementById(`${id}`) as HTMLInputElement;

    if (!mailInput) throw new Error(`#${id} not found`);

    if (mailInput.value.length > 4) {
        console.log('true');
    }

    return true;
}
