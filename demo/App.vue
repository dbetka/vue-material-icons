<template>
  <div class="home-main">
    <div class="hero">
      <Demo />
      <DemoLocal />
      <footer>
        <i>&copy; {{ new Date().getFullYear() }} dbetka</i>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import { defineComponent } from 'vue'
import DemoLocal from './DemoLocal.vue'

export default defineComponent({
  name: 'App',
  components: {
    DemoLocal,
    Demo,
  },
})
</script>
