<template>
<div class="basic-selectbar">
  <select 
    :style="{'width': width, 'height': height}"
  >
    <option selected hidden style="display:none"><slot></slot></option>
    <option 
      v-for="item in items"
      :key="item.id"
    >{{item.text}}</option>
  </select>
</div>

</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '600px'
    },
    height: {
      type: String,
      default: ''
    },
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
  
  select {
    padding: 11px 15px 11px 15px;
    border: none;
    background-color: rgba($LightGrey, 0.5);

    option {
      background-color: white;
    }
  }
  
}
</style>