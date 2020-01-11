<template>
<div class="sidebar-section"
>
  <page-sidebar
    :height="'100vh'"
  ></page-sidebar>
</div>
</template>

<script>
import PageSidebar from '@/components/blocks/page_sidebar.vue';

export default {
  
  components: {
    PageSidebar
  },
  
}
</script>

<style lang="scss">
.sidebar-section {
  position: fixed;
  width: 300px;

  // fixed의 경우엔 어쩔 수 없이 반응형에 대한 컨트롤을 섹션에 추가해야 함.
  @media screen and (max-width: 1100px) {
    width: 200px;
  }
}
</style>