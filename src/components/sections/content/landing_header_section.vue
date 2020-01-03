<template>
<div class="landing-header">
  <hero></hero>
  <content-navigation></content-navigation>
</div>
</template>

<script>
import ContentNavigation from '@/components/blocks/content_navigation.vue';
import Hero from '@/components/blocks/hero.vue';

export default {
  components: {
    Hero,
    ContentNavigation
  }
}
</script>

<style lang="scss">
.landing-header {
  .content-navigation {
  }
}
</style>