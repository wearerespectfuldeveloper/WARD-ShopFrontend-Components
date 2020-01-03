<template>
<div class="drawer-section">
  <navigation-drawer
    :width="'100%'"
    :height="'100vh'"
  ></navigation-drawer>
</div>
</template>

<script>
import NavigationDrawer from '@/components/blocks/navigation_drawer.vue';

export default {
  components: {
    NavigationDrawer
  }
}
</script>

<style lang="scss">
.drawer-section {
  position: fixed;
  width: 300px;

  // fixed의 경우엔 어쩔 수 없이 반응형에 대한 컨트롤을 섹션에 추가해야 함.
  @media screen and (max-width: 1100px) {
    width: 200px;
  }
}
</style>