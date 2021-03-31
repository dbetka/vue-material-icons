import AIcon from './components/icon.vue';
import { ICONS } from './__jscash__/icons-names-list';
import './index.sass';

const components = {
  AIcon,
};

function createCSSLink (CSSLink, key) {
  const cssId = 'dbetka-material-icons'; // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = cssId + '-' + key;
    link.rel = 'stylesheet';
    link.href = CSSLink;
    head.appendChild(link);
  }
}
function createAllCSSLinks () {
  const list = [
    'https://fonts.googleapis.com/css2?family=Material+Icons',
    'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined',
    'https://fonts.googleapis.com/css2?family=Material+Icons+Round',
    'https://fonts.googleapis.com/css2?family=Material+Icons+Sharp',
    'https://fonts.googleapis.com/css2?family=Material+Icons+Two+Tone',
  ];
  for (const [key, CSSLink] of list.entries()) createCSSLink(CSSLink, key);
}

export default {
  ICONS: () => ICONS,
  ...components,
  install (Vue, options) {
    createAllCSSLinks();
    Vue.mixin({
      computed: {
        ICONS: () => ICONS,
      },
    });
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  },
};
