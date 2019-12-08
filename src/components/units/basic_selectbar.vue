<template>
<select class="basic-selectbar">
  
</select>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [
        {id: 0, text: 'option1'},
        {id: 1, text: 'option2'},
        {id: 2, text: 'option3'},
        {id: 3, text: 'option4'},
        {id: 4, text: 'option5'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-selectbar {

}
</style>