<template>
  <div class="navigation-drawer elevation-1"
    :style="{
      'width': width,
      'height': height
    }"
  >
    <ul
      class="list"
      v-for="item_list in item_lists"
      :key="item_list.list_name"
    > 
      <h1 class="list-title font--small-caps">
        {{item_list.list_name}}
      </h1>
      <divider
      ></divider>
      <li
        class="list-item font--small"
        v-for="item in item_list.items"
        :key="item.id"
      >
        <svg class="icon" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0Z" fill="#736C49" fill-opacity="0.54"/>
        </svg>

        <span class="text">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Divider from '@/components/units/divider.vue';

export default {
  components: {
    Divider
  },
  props: {
    width: {
      type: String,
      default: '250px'
    },
    height: {
      type: String,
      default: '100%'
    },
    item_lists: {
      type: Array,
      default: () => [
        {list_name: 'Main', items: [
          { id:'1', text: 'Item name', link: 'link', icon: 'label' },
          { id:'2', text: 'Item name', link: 'link', icon: 'label' },
          { id:'3', text: 'Item name', link: 'link', icon: 'label' },
          { id:'4', text: 'Item name', link: 'link', icon: 'label' }
        ]},
        {list_name: 'Sub', items: [
          { id:'1', text: 'Item name', link: 'link', icon: 'label' },
          { id:'2', text: 'Item name', link: 'link', icon: 'label' },
          { id:'3', text: 'Item name', link: 'link', icon: 'label' },
          { id:'4', text: 'Item name', link: 'link', icon: 'label' }
        ]}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-drawer {
  background-color: $Light;

  .list {
    margin-bottom: 25px;

    .list-title {
      padding: 19px;
      color: $Dark;
    }

    .list-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 8px 16px 8px 16px;
      margin: 5px;

      &:hover {
        color: $Tertiary;
        background-color: rgba($Tertiary ,0.1);
        transition: background-color 0.5s;

        .icon {
          path {
            fill: $Tertiary;
          }
        }
      }

      .icon {
        margin-right: 32px;
      }

      .text {
        color: $Dark;
      }

    }
  }
}
</style>