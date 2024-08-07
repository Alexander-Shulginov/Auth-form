import '../scss/style.scss';

import initTabs from './ui/initTabs';
import togglePlaceholder from './ui/TogglePlaceholder';
import togglePasswordVisibility from './ui/TogglePasswordVisibility';

initTabs();
togglePlaceholder();
// togglePasswordVisibility();

// const el: NodeList = document.querySelectorAll('.service__elem');

// el.forEach((item: HTMLElement) => {
//     item.addEventListener('click', () => {
//         item.classList.add('service__elem--clicked');
//         setTimeout(() => {
//             item.classList.remove('service__elem--clicked');
//         }, 400);
//     });
// });
