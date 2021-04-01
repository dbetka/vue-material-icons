<template>
  <i
    class="a-icon"
    :class="classes"
    :style="style"
    v-on="{ ...$listeners }"
  >
    {{ name }}
    <slot/>
  </i>
</template>

<script>
import { uCheck } from '@dbetka/utils';

export default {
  name: 'a-icon',
  props: {
    type: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: [String, Number],
      default: undefined,
    },
  },
  computed: {
    style () {
      let style = '';
      if (uCheck.isDefined(this.size)) {
        style += `font-size: ${this.size}px;`;
        style += `width: ${this.size}px;`;
        style += `height: ${this.size}px;`;
      }
      return style;
    },
    typeClass () {
      switch (this.type) {
        case 'outlined': return 'f-outlined';
        case 'round': return 'f-round';
        case 'sharp': return 'f-sharp';
        case 'two-tone': return 'f-two-tone';
        default: return '';
      }
    },
    classes () {
      return [
        this.typeClass,
      ];
    },
  },
};
</script>
