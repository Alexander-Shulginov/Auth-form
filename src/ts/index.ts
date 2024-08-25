import '../scss/style.scss';

import initTabs from './ui/initTabs';
import togglePlaceholder from './ui/TogglePlaceholder';
import { submitHandler } from './frontend/submitHandler';
import { FormElem } from './frontend/types';

initTabs();
togglePlaceholder();

const formSignIn = document.getElementById(FormElem.signIn) as HTMLFormElement;
const formSignUp = document.getElementById(FormElem.signUp) as HTMLFormElement;

formSignIn.addEventListener('submit', (event) => submitHandler(event));
formSignUp.addEventListener('submit', (event) => submitHandler(event));

// if (!formSignIn) throw new Error(`#${signInForm.form} not found`);
// if (!formSignUp) throw new Error(`#${formSignUp.form} not found`);
