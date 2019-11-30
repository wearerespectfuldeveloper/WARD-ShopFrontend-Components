<template>
  <div class="divider"
    :style="{'marginRight': margin, 'marginLeft': margin}"
  ></div>
</template>

<script>
export default {
  props: {
    margin: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  opacity: 0.2;
  border: 1px solid $LightGrey;
}
</style>