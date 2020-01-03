<template>
<div class="product-desc-content-section">
  <content-header
    :heading="'Vue.js 스티커'"
    :text="''"
    :text_align="'center'"
  ></content-header>
  <product-main-desc-card
  ></product-main-desc-card>
  <div class="desc">
    <editor-block 
      class="elevation-1"
      :width="'80%'"  
    ></editor-block>
  </div>
  <div class="comment">

  </div>
</div>
</template>

<script>
import ContentHeader from '@/components/blocks/content_header.vue';
import ProductMainDescCard from '@/components/blocks/product_main_desc_card.vue';
import EditorBlock from '@/components/blocks/editor_block.vue';



export default {
  components: {
    ContentHeader,
    ProductMainDescCard,
    EditorBlock
  }
}
</script>

<style lang="scss" scoped>
.product-desc-content-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content-header {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .product-main-desc-card {
    margin-bottom: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
  }

  .desc {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f2f2f2;
    margin-bottom: 60px;

    .editor-block {
      background-color: white;
    }

  }

  .comment {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 60px;
    background-color: #f2f2f2;
  }
}
</style>