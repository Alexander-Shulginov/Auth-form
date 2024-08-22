const enum ValidationOption {
    nameLength = 4,
    passwordLength = 6,
}

export function mailValidation(data: string): boolean {
    const mailRegExp: RegExp = /^[^@]+@[^@]+$/;
    return mailRegExp.test(data);
}

export function passwordValidation(data: string): boolean {
    return data.length > ValidationOption.passwordLength;
}

export function nameValidation(data: string): boolean {
    return data.length > ValidationOption.nameLength;
}
