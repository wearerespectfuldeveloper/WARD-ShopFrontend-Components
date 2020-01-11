<template>
<div class="layout">
  <layout-template>
    <header-section
      slot="header"
    ></header-section>
    <sidebar-section
      slot="sidebar"
    ></sidebar-section>
    <landing-page
      slot="page-content"
    ></landing-page>
  </layout-template>
</div>
</template>

<script>
// 템플릿
import LayoutTemplate from '@/components/templates/layout_template.vue'; 

// 섹션
import HeaderSection from '@/components/sections/layout/header_section.vue';
import SidebarSection from '@/components/sections/layout/sidebar_section.vue';

// 페이지
import LandingPage from '@/components/pages/landing_page.vue';


export default {
  components: {
    LayoutTemplate,
    HeaderSection,
    SidebarSection,
    LandingPage
  }
}
</script>

<style lang="scss" scoped>
.layout {
  
}
</style>