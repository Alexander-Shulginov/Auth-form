import '../scss/style.scss';
import { signInForm, signUpForm } from './frontend/types';

import initTabs from './ui/initTabs';
import togglePlaceholder from './ui/TogglePlaceholder';
import togglePasswordVisibility from './ui/TogglePasswordVisibility';
import submitHandler from './frontend/submitHandler';

initTabs();
togglePlaceholder();
// togglePasswordVisibility();

const formSignIn = document.getElementById(signInForm.form) as HTMLFormElement;
const formSignUp = document.getElementById(signUpForm.form) as HTMLFormElement;

formSignIn.addEventListener('submit', (event) => submitHandler(event));
formSignUp.addEventListener('submit', (event) => submitHandler(event));
