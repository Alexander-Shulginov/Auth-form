export interface signInData {
    [key: string]: string;
}

export const enum signInForm {
    form = 'sign-in-form',

    mailInput = 'sign-in-mail',
    mailError = 'sign-in-mail-error',
    mailErrorText = 'Invalid email',

    password = 'sign-in-password',
    passwordError = 'sign-in-password-error',
    passwordErrorText = 'Min length 4',
}

export const enum signUpForm {
    form = 'sign-up-form',
    name = 'sign-up-name',
    mail = 'sign-up-mail',
    password = 'sign-up-password',
}
