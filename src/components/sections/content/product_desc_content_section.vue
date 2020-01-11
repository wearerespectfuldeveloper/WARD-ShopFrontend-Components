<template>
<div class="product-desc-content-section">
  <content-navigation
    :width="'100%'"
    :is_sticky="true"
  ></content-navigation>
  <content-header
    :heading="'Vue.js 스티커'"
    :text="''"
    :text_align="'center'"
  ></content-header>
  <product-main-desc-card>
    <div class="extra" slot="extra-feature">
      <basic-selectbar
        :width="'100%'"
      >
        옵션
      </basic-selectbar>
      <basic-selectbar
        :width="'100%'"
      >
        수량
      </basic-selectbar>
      <div class="buttons">
        <basic-button
          :width="'150px'"
        >
          장바구니
        </basic-button>
        <basic-button
          :width="'150px'"
        >
          주문하기
        </basic-button>
      </div>
    </div>
  </product-main-desc-card>
  <div class="desc">
    <!-- <editor-block 
      class=""
      :width="'80%'"
    ></editor-block> -->
  </div>
  <div class="comment">
    <comment-block
      :width="'80%'"
    ></comment-block>
    <comment-block
      :width="'80%'"
    ></comment-block>
    <comment-block
      :width="'80%'"
    ></comment-block>
    <comment-block
      :width="'80%'"
    ></comment-block>
  </div>
</div>
</template>

<script>
// BLOCK
import ContentNavigation from '@/components/blocks/content_navigation.vue';
import ContentHeader from '@/components/blocks/content_header.vue';
import ProductMainDescCard from '@/components/blocks/product_main_desc_card.vue';
import EditorBlock from '@/components/blocks/editor_block.vue';
import CommentBlock from '@/components/blocks/comment_block.vue';

// UNIT
import BasicButton from '@/components/units/basic_button.vue';
import BasicSelectbar from '@/components/units/basic_selectbar.vue';

// 트리거
import intersectionObserver from '@/mixins/intersection_observer.js';


export default {
  mixins: [
    intersectionObserver({targets: ['.product-main-desc-card', '.desc', '.comment'], animation: 'fade-up'}),
  ],
  components: {
    ContentNavigation,
    ContentHeader,
    ProductMainDescCard,
    EditorBlock,
    BasicButton,
    BasicSelectbar,
    CommentBlock
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
    
    margin-bottom: 35px;
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
    margin-bottom: 35px;

    .editor-block {
      background-color: white;
    }
  }

  .comment {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-bottom: 35px;
    background-color: #f2f2f2;
    > :not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .extra {
    margin-top: 20px;
    display: flex;
    height: 180px;
    flex-direction: column;
    justify-content: space-between;

    .buttons {
      display: flex;
      justify-content: flex-end;

      .basic-button {
        margin-left: 20px;
      }
    }
  }
}
</style>