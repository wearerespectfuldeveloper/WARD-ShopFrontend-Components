<template>
<div class="layout-template">
  <transition name="expand" appear>
    <div class="side-layout" >
      <slot name="sidebar"></slot>
    </div>
  </transition>
  
  <div class="main-layout">
    <div class="header">
      <slot name="header"></slot>
    </div>
    
    <div class="page-content">
      <slot name="page-content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show_sidebar: true,
      show_link: true
    }
  },
  
}
</script>

<style lang="scss" scoped>

// -------------------- GRID LAYOUT CONTROL

.layout-template {
  display: flex;
  
  .main-layout {
    @include normal-grid;
    grid-template-areas: 
    "header header header header header header header header header header header header"
    "page-content page-content page-content page-content page-content page-content page-content page-content page-content page-content page-content page-content"
    "footer footer footer footer footer footer footer footer footer footer footer footer";
  }

  .side-layout {
    min-width: 300px;
    position: relative;
    
    @media screen and (max-width: 900px) {
      display: none;
    }
    
    @media screen and (max-width: 1100px) {
      min-width: 200px;
    }
  }
}

.header {
  grid-area: header;
  padding: 0px 70px 0px 70px;
  position: sticky;
  background-color: white;
  top: 0;
  @include border-bottom;
  @include border-right;
  @include border-left;
}

.page-content {
  grid-area: page-content;
}

.footer {
  grid-area: footer;
}
</style>