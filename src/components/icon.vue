<template>
  <i
    class="a-icon"
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
      required: true,
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
  },
};
</script>
