import { IconComputed } from 'utils/IconComputed';
import { components } from 'utils/components';

export function install (Vue, options) {
  IconComputed.install(Vue, options);
  for (const componentName in components) {
    const component = components[componentName];
    Vue.component(component.name, component);
  }
}
