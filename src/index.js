import AIcon from './components/icon.vue';
import { ICONS } from './__jscash__/icons-names';
import { ICONS_TYPES } from './__jscash__/icons-types';
import './index.sass';

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

const ICONS_GETTER = () => ICONS;
const ICONS_TYPES_GETTER = () => ICONS_TYPES;
const components = {
  AIcon,
};

export {
  AIcon,
  ICONS,
  ICONS_TYPES,
};

export const IconFonts = {
  install () {
    const list = Object.values(ICONS_TYPES)
      .map(type => 'https://fonts.googleapis.com/css2?family=' + type.replace(' ', '+'));
    for (const [key, CSSLink] of list.entries()) createCSSLink(CSSLink, key);
  },
};

export const IconComputed = {
  install (Vue, options) {
    Vue.mixin({
      computed: {
        ICONS: ICONS_GETTER,
        ICONS_TYPES: ICONS_TYPES_GETTER,
      },
    });
  },
};

export default {
  install (Vue, options) {
    IconFonts.install();
    IconComputed.install(Vue, options);
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  },
};
