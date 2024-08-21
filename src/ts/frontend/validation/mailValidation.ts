export default function mailValidation(data: string): boolean {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    const mailIsValid: boolean = mailRegExp.test(data);
    return mailIsValid;
}
