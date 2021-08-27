<template>
  <div
    class="hello"
  >
    hello
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MenuItem } from '@/types'

export default defineComponent({
  name: 'Menu',
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      default: () => [],
    },
    menuStyle: {
      type: String,
      default: 'slided_out',
      required: false,
    },
  },
})
</script>
