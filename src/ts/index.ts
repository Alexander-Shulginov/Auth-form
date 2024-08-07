import '../scss/style.scss';

import initTabs from './ui/initTabs';
import { animationSignIn } from './ui/gsapAnimation';
import togglePlaceholder from './ui/TogglePlaceholder';
import togglePasswordVisibility from './ui/TogglePasswordVisibility';

initTabs();
togglePlaceholder();
// togglePasswordVisibility();
document.addEventListener('DOMContentLoaded', animationSignIn);
