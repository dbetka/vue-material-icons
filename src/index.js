import OwnButton from './components/own-button.vue';

const components = {
  OwnButton,
};

export default {
  ...components,
  install (Vue, options) {
    for (const componentName in components) {
      const component = components[componentName]
      Vue.component(component.name, component);
    }
  }
};
