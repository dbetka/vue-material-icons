<template>
  <i
    class="a-icon"
    :class="classes"
    :style="style"
    v-bind="$attrs"
  >
    {{ name }}
    <slot />
  </i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AIconOld',
  inheritAttrs: false,
  props: {
    type: { type: String, default: '' },
    name: { type: String, required: true },
    size: { type: [ String, Number ], default: undefined },
    filled: { type: Boolean },
    outlined: { type: Boolean },
    round: { type: Boolean },
    sharp: { type: Boolean },
    twoTone: { type: Boolean },
  },
  computed: {
    style () {
      let style = ''
      if (typeof this.size !== 'undefined') {
        style += `font-size: ${this.size}px;`
        style += `width: ${this.size}px;`
        style += `height: ${this.size}px;`
      }
      return style
    },
    typeClassFromType (): string {
      switch (this.type) {
        case this.$icons.types.filled: return 'f-filled'
        case this.$icons.types.outlined: return 'f-outlined'
        case this.$icons.types.round: return 'f-round'
        case this.$icons.types.sharp: return 'f-sharp'
        case this.$icons.types['two-tone']: return 'f-two-tone'
        default: return ''
      }
    },
    typeClassFromParams (): string {
      if (this.filled) return 'f-filled'
      if (this.outlined) return 'f-outlined'
      if (this.round) return 'f-round'
      if (this.sharp) return 'f-sharp'
      if (this.twoTone) return 'f-two-tone'
      else return ''
    },
    classes (): Array<string> {
      return [
        this.typeClassFromType,
        this.typeClassFromParams,
      ]
    },
  },
})
</script>
