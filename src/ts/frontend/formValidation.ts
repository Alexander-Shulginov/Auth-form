export function mailValidation(data: string): boolean {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    return mailRegExp.test(data);
}

export function passwordValidation(data: string): boolean {
    return data.length > 6;
}
