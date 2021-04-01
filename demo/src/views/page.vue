<template>
  <div class="page">
    <div>Demo for usage in component without full bundle.</div>
    <div>
      <span class="label">Filled</span>
      <a-icon :name="ICONS.delete" :type="ICONS_TYPES.filled"/>
    </div>
    <div>
      <span class="label">Outlined</span>
      <a-icon :name="ICONS.delete" :type="ICONS_TYPES.outlined"/>
    </div>
    <div>
      <span class="label">Round</span>
      <a-icon :name="ICONS.delete" :type="ICONS_TYPES.round"/>
    </div>
    <div>
      <span class="label">Sharp</span>
      <a-icon :name="ICONS.delete" :type="ICONS_TYPES.sharp"/>
    </div>
    <div>
      <span class="label">Two tone</span>
      <a-icon :name="ICONS.delete" :type="ICONS_TYPES['two-tone']"/>
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
