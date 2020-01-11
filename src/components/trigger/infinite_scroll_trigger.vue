<template>
<div class="infinite-scroll-trigger">
  <loading-dots v-if="loading"></loading-dots>
</div>
</template>

<script>
import LoadingDots from '@/components/units/loading_dots.vue';

export default {
  name: 'intersection_observer',
  data() {
    return {
      observer: null,
      loading: false
    }
  },
  mounted () {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        // 비동기 데이터 GET 작업

        // 성공시 loading 값을 true 로 전환 실패시 그대로 둔다.
        this.loading = true;
      }
    });
    this.observer.observe(this.$el);
  },
  components: {
    LoadingDots
  }
}
</script>

<style lang="scss" scoped>
.infinite-scroll-trigger {

}
</style>