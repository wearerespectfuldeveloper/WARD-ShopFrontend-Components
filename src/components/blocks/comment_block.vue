<template>
<div class="comment-block"
  :style="{
    'width': width,
    'height': height
  }"
>
  <div class="comment-header">
    <div class="user-avatar">
      <img :src="require(`@/assets/svg/icons/default-avatar.svg`)" alt="avatar" class="avatart">
    </div>
    <div class="user-info">
      <h1 class="user-name font--base-semibold">
        {{user_name}}
      </h1>
      <p class="user-desc font--link">
        {{user_desc}}
      </p>
    </div>
  </div>
  <div class="comment-body">
    <p class="comment-text">
      {{comment_text}}
    </p>
    
  </div>
</div>
</template>

<script>

// 따로 텍스트 블록, 이미지 블록 컴포넌트 제작 필요함

export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    user_name: {
      type: String,
      default: 'swon3210'
    },
    user_desc: {
      type: String,
      default: '자바스크립트 개발자'
    },
    comment_text: {
      type: String,
      default: '매우 좋은 상품인 것 같습니다.'
    },
    avatar_link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-block {
  background-color: white;
  padding: 16px;
  @include border-all;

  .comment-header {
    display: flex;
    margin-bottom: 24px;

    .user-avatar {
      margin-right: 24px;
      .avatart {
        
      }
    }

    .user-info {
      .user-name {

      }
      .user-desc {

      }
    }
  }

  .comment-body {
    margin-bottom: 12px;
    .comment-text {

    }
  }


}
</style>