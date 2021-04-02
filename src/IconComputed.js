import { ICONS } from './__jscache__/icons-names';
import { ICONS_TYPES } from './__jscache__/icons-types';

const ICONS_GETTER = () => ICONS;
const ICONS_TYPES_GETTER = () => ICONS_TYPES;

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
