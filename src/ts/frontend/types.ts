export type InputData = Record<string, string>;

export const enum FormElem {
    signIn = 'sign-in-form',
    signUp = 'sign-up-form',
}

export const enum EmailInput {
    errorElem = 'data-error-mail',
    errorText = 'Mail invalid',
}

export const enum NameInput {
    errorElem = 'data-error-name',
    errorText = 'Min length 4',
    nameLength = 4,
}

export const enum PasswordInput {
    errorElem = 'data-error-password',
    errorText = 'Min length 6',
    passLength = 6,
}
