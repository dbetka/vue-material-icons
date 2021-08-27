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
import { uCheck } from '@dbetka/utils'

export default {
  name: 'AIcon',
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
      if (uCheck.isDefined(this.size)) {
        style += `font-size: ${this.size}px;`
        style += `width: ${this.size}px;`
        style += `height: ${this.size}px;`
      }
      return style
    },
    typeClassFromType () {
      switch (this.type) {
        case this.$icons.types.filled: return 'f-filled'
        case this.ICONS_TYPES.outlined: return 'f-outlined'
        case this.ICONS_TYPES.round: return 'f-round'
        case this.ICONS_TYPES.sharp: return 'f-sharp'
        case this.ICONS_TYPES['two-tone']: return 'f-two-tone'
        default: return ''
      }
    },
    typeClassFromParams () {
      if (this.filled) return 'f-filled'
      if (this.outlined) return 'f-outlined'
      if (this.round) return 'f-round'
      if (this.sharp) return 'f-sharp'
      if (this.twoTone) return 'f-two-tone'
      else return ''
    },
    classes () {
      return [
        this.typeClassFromType,
        this.typeClassFromParams,
      ]
    },
  },
}
</script>
