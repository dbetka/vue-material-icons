<script setup lang="ts">
import { computed } from 'vue'
import { IconsTypesProp } from 'jscache/icons-types'
import { IconsProp } from 'jscache/icons-names'
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
    case icons.types.filled: return 'f-filled'
    case icons.types.outlined: return 'f-outlined'
    case icons.types.round: return 'f-round'
    case icons.types.sharp: return 'f-sharp'
    case icons.types['two-tone']: return 'f-two-tone'
    default: return ''
  }
})
const typeClassFromParams = computed(() => {
  if (props.filled) return 'f-filled'
  if (props.outlined) return 'f-outlined'
  if (props.round) return 'f-round'
  if (props.sharp) return 'f-sharp'
  if (props.twoTone) return 'f-two-tone'
  else return ''
})

const classes = computed(() => ([
  'a-icon',
  typeClassFromType.value,
  typeClassFromParams.value,
]))
</script>

<template>
  <i
    :class="classes"
    :style="styles"
  >
    {{ props.name }}
  </i>
</template>
