export interface signInData {
    [key: string]: string;
}

export const enum signInForm {
    form = 'form-sign-in',
    mail = 'user-in-mail',
    password = 'user-in-password',
}

export const enum signUpForm {
    form = 'form-sign-up',
    name = 'user-up-name',
    mail = 'user-up-mail',
    password = 'user-up-password',
}
