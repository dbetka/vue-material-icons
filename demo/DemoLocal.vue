<template>
  <div style="margin-bottom: 30px">
    {{ $icons.names.shopping_cart }}
    <material-icon
      name="shopping_cart"
      type="filled"
      class="f-test"
      size="26"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MaterialIcon } from '../'

export default defineComponent({
  name: 'DemoLocal',
  components: {
    MaterialIcon,
  },
  setup() {
    const handleSelection = (name: string) => {
      console.log(name)
    }

    return {
      handleSelection,
    }
  },
})
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
  border-radius: 8px;
}

.home-main {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.hero {
  width: 650px;

  img {
    filter: drop-shadow(2px 2px 60px rgba(0, 0, 0, 0.25));
  }
}

.github {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}

.feature-set {
  font-size: 0.95rem;
  margin-top: 1rem;

  ul {
    list-style: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;

    li {
      margin: 1rem 0;
      flex-basis: 47%;
      text-align: left;
      background: #fff;
      height: 4rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.5rem 0;
      filter: drop-shadow(2px 2px 60px rgba(0, 0, 0, 0.1));
    }

    .icon {
      font-size: 1.5rem;
      margin-left: 0.5rem;
      margin-right: 0.3rem;
    }

    .name {
      flex: auto;
    }
  }
}

footer {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
