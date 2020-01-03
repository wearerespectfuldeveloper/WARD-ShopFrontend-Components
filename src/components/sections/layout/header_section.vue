<template>
<div class="header-section">
  <div class="section-row">
    <toggle-button-apps></toggle-button-apps>
    <page-header></page-header>
    <toggle-button-menu></toggle-button-menu>
  </div>
</div>
</template>

<script>
// BLOCK
import PageHeader from '@/components/blocks/page_header.vue';

// UNIT
import ToggleButtonApps from '@/components/units/toggle_button_apps.vue';

import ToggleButtonMenu from '@/components/units/toggle_button_menu.vue';


export default {
  components: {
    PageHeader,
    ToggleButtonApps,
    ToggleButtonMenu
  }
}
</script>

<style lang="scss">
.header-section {

  .section-row {
    position: relative;
    .toggle-button-apps {
      position: relative;
      left: -60px;
      padding: 16px;
      float: left;
    }

    .page-header {
    }

    .toggle-button-menu {
      display: none;
      position: relative;
      right: -60px;
      padding: 20px 16px 20px 16px;
      float: right;
    }

    @media screen and (max-width: 850px) {
      .page-header {
        display: none;
      }

      .toggle-button-menu {
        display: block;
      }
    }
  }
}


</style>