<template>
<div class="landing-content">
  <content-header
    :heading="'BEST PRODUCT'"
    :text="'최고의 상품들'"
    :text_align="'center'"
  ></content-header>

  <div class="item-list">
    <card-with-image
      v-for="i in 12"
      :width="'400px'"
      :thumnail_height="'300px'"
      :key="i"
    ></card-with-image>
    
  </div>
  <div class="infinite-scroll">
    <infinite-scroll-trigger></infinite-scroll-trigger>
  </div>
</div>
</template>

<script>
// 트리거
import InfiniteScrollTrigger from '@/components/trigger/infinite_scroll_trigger.vue';

// 블록
import ContentHeader from '@/components/blocks/content_header.vue';
import CardWithImage from '@/components/blocks/card_with_image.vue';

export default {
  components: {
    ContentHeader,
    CardWithImage,
    InfiniteScrollTrigger
  }
}
</script>

<style lang="scss">
.landing-content {

  .content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 64px;
  }

  .item-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    .card-with-image {
      margin: 10px 20px 70px 20px;
    }

  }
  
  .infinite-scroll {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>