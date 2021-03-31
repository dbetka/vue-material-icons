<template>
  <div class="page">
    <div>test</div>
    <div>
      <a-icon :name="ICONS.check"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
};
</script>

<style lang="scss">
.page {
  position: relative;
  flex: 1;
  padding: 16px
}
</style>
