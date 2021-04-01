import AIcon from './components/icon.vue';
import { ICONS } from './__jscache__/icons-names';
import { ICONS_TYPES } from './__jscache__/icons-types';
import './index.sass';

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
    IconComputed.install(Vue, options);
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  },
};
