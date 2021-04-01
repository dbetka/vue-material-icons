<template>
  <div class="page">
    <div>Demo for usage in component without full bundle.</div>
    <div>
      <span class="label">Filled</span>
      <a-icon :name="ICONS.delete" filled/>
    </div>
    <div>
      <span class="label">Outlined</span>
      <a-icon :name="ICONS.delete" outlined/>
    </div>
    <div>
      <span class="label">Round</span>
      <a-icon :name="ICONS.delete" round/>
    </div>
    <div>
      <span class="label">Sharp</span>
      <a-icon :name="ICONS.delete" sharp/>
    </div>
    <div>
      <span class="label">Two tone</span>
      <a-icon :name="ICONS.delete" two-tone/>
    </div>
  </div>
</template>

<script>
import { AIcon, ICONS, ICONS_TYPES, IconFonts } from 'material-icons';

IconFonts.install();

export default {
  name: 'page',
  components: {
    AIcon,
  },
  computed: {
    ICONS: () => ICONS,
    ICONS_TYPES: () => ICONS_TYPES,
  },
};
</script>
