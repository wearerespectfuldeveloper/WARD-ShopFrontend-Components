<template>
  <div class="navigation-drawer">
    <ul 
      v-for="(item_list, index) in item_lists"
      :key="index"
    >
      <li
        v-for="item in item_list"
        :key="item.id"
      >
        {{text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item_lists: {
      type: Object,
      default: () => ({
        main: [
          { text: '', link: '', icon: '' }
        ],
        sub: [
          { text: '', link: '', icon: '' }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-drawer {

}
</style>