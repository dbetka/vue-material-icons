<template>
  <div class="page">
    <div>test</div>
    <div>
      <a-icon :name="ICONS.check"/>
    </div>
  </div>
</template>

<script>
import { AIcon, ICONS_GETTER, addIconsFonts } from 'material-icons';

addIconsFonts();

export default {
  name: 'page',
  components: {
    AIcon,
  },
  computed: {
    ICONS: ICONS_GETTER,
  },
};
</script>

<style lang="scss">
.page {
  position: relative;
  flex: 1;
  padding: 16px
}
</style>
