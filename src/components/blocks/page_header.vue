<template>
  <div class="page-header">
    <ul class="left">
      <li class="header-item" v-for="item in left_items" :key="item.text">
        {{ item.text }}
      </li>
    </ul>
    <ul class="right">
      <li class="header-item" v-for="item in right_items" :key="item.text">
        {{ item.text }}
      </li>
      <a href="#" class="login-button">로그인</a>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    left_items: {
      type: Array,
      default: [
        { text: "소개", link: "#" },
        { text: "고객센터", link: "#" }
      ]
    },
    right_items: {
      type: Array,
      default: [
        { text: "장바구니", link: "#" },
        { text: "도움말", link: "#" }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    list-style: none;
    .header-item {
      margin-right: 30px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    list-style: none;

    .header-item {
      margin-right: 30px;
    }

    .login-button {
        padding: 9px 25px 9px 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: #FFFFFF;
        border-radius: 5px;
        background: #000000;
        text-decoration: none;
    }
  }
}
</style>
