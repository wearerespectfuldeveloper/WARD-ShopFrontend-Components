<template>
<button class="basic-button"
  @click="click_event"
>
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    click_event: {
      type: Function,
      default: () => {
        alert('clicked!')
      }
    },
    
  }
}
</script>

<style lang="scss" scoped>
.basic-button {

}
</style>