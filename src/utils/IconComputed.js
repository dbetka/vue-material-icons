import { ICONS } from 'jscache/icons-names';
import { ICONS_TYPES } from 'jscache/icons-types';

export const ICONS_GETTER = () => ICONS;
export const ICONS_TYPES_GETTER = () => ICONS_TYPES;

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
