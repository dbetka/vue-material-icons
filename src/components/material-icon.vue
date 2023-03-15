<script setup lang="ts">
import { computed } from 'vue'
import { IconsTypesProp } from '@/jscache/icons-types'
import { IconsProp } from '@/jscache/icons-names'
import { useIcons } from '@/index'

const props = withDefaults(defineProps<{
  type?: IconsTypesProp
  name: IconsProp
  size: string
  filled?: boolean,
  outlined?: boolean,
  round?: boolean,
  sharp?: boolean,
  twoTone?: boolean,
}>(),{
  type: 'filled',
  size: '',
})

const icons = useIcons()
const styles = computed(() => {
  let style = ''
  if (props.size !== '') {
    style += `font-size: ${props.size}px;`
    style += `width: ${props.size}px;`
    style += `height: ${props.size}px;`
  }
  return style
})
const typeClassFromType = computed(() => {
  switch (props.type) {
    case icons.types.filled: return 'material-icon-filled'
    case icons.types.outlined: return 'material-icon-outlined'
    case icons.types.round: return 'material-icon-round'
    case icons.types.sharp: return 'material-icon-sharp'
    case icons.types['two-tone']: return 'material-icon-two-tone'
    default: return ''
  }
})
const typeClassFromParams = computed(() => {
  if (props.filled) return 'material-icon-filled'
  if (props.outlined) return 'material-icon-outlined'
  if (props.round) return 'material-icon-round'
  if (props.sharp) return 'material-icon-sharp'
  if (props.twoTone) return 'material-icon-two-tone'
  else return ''
})

const classes = computed(() => ([
  typeClassFromType.value,
  typeClassFromParams.value,
]))
</script>

<template>
  <i
    class="material-icon"
    :class="classes"
    :style="styles"
  >
    {{ props.name }}
  </i>
</template>
