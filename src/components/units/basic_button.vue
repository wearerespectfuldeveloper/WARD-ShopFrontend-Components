<template>
<button class="basic-button"
  :style="{'width': width, 'height': height}"
  @click="click_event"
>
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: ''
    },
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
  cursor: pointer;
  padding: 12px;
  background: none;
  border: 1px solid $Dark;
  border-radius: 5px;

  font-family: 'Lato';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
}
</style>