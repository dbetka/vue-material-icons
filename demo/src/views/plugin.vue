<template>
  <div class="page">
    <div>Demo for usage as Vue plugin.</div>
    <div>
      <span class="label">Filled</span>
      <a-icon :name="ICONS.home" filled/>
    </div>
    <div>
      <span class="label">Filled and colored</span>
      <a-icon :name="ICONS.home" filled class="f-red"/>
    </div>
    <div>
      <span class="label">Outlined</span>
      <a-icon :name="ICONS.home" :type="ICONS_TYPES.outlined"/>
    </div>
    <div>
      <span class="label">Round</span>
      <a-icon :name="ICONS.home" :type="ICONS_TYPES.round"/>
    </div>
    <div>
      <span class="label">Sharp</span>
      <a-icon :name="ICONS.home" :type="ICONS_TYPES.sharp"/>
    </div>
    <div>
      <span class="label">Two tone</span>
      <a-icon :name="ICONS.home" :type="ICONS_TYPES['two-tone']"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'page',
};
</script>
