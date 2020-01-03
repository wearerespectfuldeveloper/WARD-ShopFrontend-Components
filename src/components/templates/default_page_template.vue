<template>
<div class="landing-page-template">
  <slot></slot>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.landing-page-template {
  padding: 0px 0px 0px 0px;

  @media screen and (max-width: 700px) {
    padding: 0px 0px 0px 0px;
  }

  @media screen and (max-width: 1100px) {
    padding: 0px 0px 0px 0px;
  }
}
</style>