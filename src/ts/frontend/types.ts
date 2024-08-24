export type SignInData = Record<string, string>;

export const enum ErrorElems {
    mailError = 'data-error-mail',
    mailErrorText = 'Mail invalid',

    nameError = 'data-error-name',
    nameErrorText = 'Min length 4',
    nameLength = 4,

    passError = 'data-error-password',
    passErrorText = 'Min length 6',
    passLength = 6,
}

export const enum signInForm {
    form = 'sign-in-form',
}

export const enum signUpForm {
    form = 'sign-up-form',
}
