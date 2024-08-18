import '../scss/style.scss';

import initTabs from './ui/initTabs';
import togglePlaceholder from './ui/TogglePlaceholder';
import togglePasswordVisibility from './ui/TogglePasswordVisibility';
import formData from './frontend/signInHandler';
import nameValidation from './frontend/validation/nameValidation';

initTabs();
togglePlaceholder();
// togglePasswordVisibility();

formData();
nameValidation();