<template>
  <div class="hero">
    <h1 class="hero-title">
      {{title}}
    </h1>
    <p class="hero-text">
      {{text}}
    </p>
    <button class="hero-button">
      {{button_text}}
    </button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    text: {
      type: String,
      default: 'Text'
    },
    button_text: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss">

.hero {
  background-color: #F2F2F2;

  .hero-title {
    
  }

  .hero-text {

  }

  .hero-button {

  }
}

</style>