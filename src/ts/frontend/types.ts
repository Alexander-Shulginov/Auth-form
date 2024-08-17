export interface signInData {
    [key: string]: string;
}

export const enum signInForm {
    form = 'sign-in-form',

    mail = 'sign-in-mail',
    mailError = 'sign-in-mail-error',

    password = 'sign-in-password',
    passwordError = 'sign-in-password-error',
}

export const enum signUpForm {
    form = 'sign-up-form',
    name = 'sign-up-name',
    mail = 'sign-up-mail',
    password = 'sign-up-password',
}
