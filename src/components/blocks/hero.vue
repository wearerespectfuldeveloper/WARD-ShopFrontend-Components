<template>
  <div class="hero"
    :style="{
      'width': width,
      'height': height
    }"
  >
    <h1 class="hero-title font--f1">
      {{title}}
    </h1>
    <div class="hero-content">
      <p class="hero-text font--small-caps">
        {{text}}
      </p>
      <button class="hero-button">
        {{button_text}}
      </button>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    title: {
      type: String,
      default: 'We Are Resfectful Developers'
    },
    text: {
      type: String,
      default: '우리는 모두 존중 받는 개발자들입니다'
    },
    button_text: {
      type: String,
      default: '소개 페이지'
    }
  }
}
</script>

<style lang="scss" scoped>

.hero {
  background-color: rgba($Secondary, 0.35);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .hero-title {
    color: $TextBlack;
    margin-bottom: 40px;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .hero-text {
      color: $TextGrey;
      margin-bottom: 35px;
    }

    .hero-button {
      width: 280px;
      background-color: $Dark;
      padding: 20px;
      border: none;
      color: $Light;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: $Tertiary;
      }

      &:focus {
        outline: none;
      }
    }
  }

  
}

</style>