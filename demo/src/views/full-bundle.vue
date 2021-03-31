<template>
  <div class="page">
    <div>Demo for usage icons with full bundle.</div>
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
