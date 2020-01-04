<template>
<div class="product-main-desc-card"
   :style="{
    'width': width,
    'height': height,
  }"
>
  <div class="product">
    <!-- 아 이게 백그라운드 이미지라서 그렇군 -->
    <img class="product-image"
      :src="product_image_link"
      :style="{
        'width': image_width,
        'minHeight': image_height
      }"
    />

    <div class="product-info">
      <div class="info-text">
        <div class="name font--f4">
          {{product_name}}
        </div>
        <div class="desc font--f5" v-html="product_desc">
        </div>
      </div>
      <slot name="extra-feature"></slot>
    </div>
  </div>
  
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '800px'
    },
    image_width: {
      type: String,
      default: '50%'
    },
    image_height: {
      type: String,
      default: '50%'
    },
    product_image_link: {
      type: String,
      default: 'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    product_name: {
      type: String,
      default: '상품 이름'
    },
    product_desc: {
      type: String,
      default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
          }
  }
}
</script>

<style lang="scss" scoped>
.product-main-desc-card {
  color: $Dark;
  display: flex;
  justify-content: center;
  align-items: center;

  .product {
    display: flex;
    justify-content: center;
    width: 80%;

    .product-image {
      
    }

    .product-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 50%;
      padding: 10px 0px 0px 38px;
      height: 90%;
      overflow: auto;

      .info-text {
        .name {
          margin-bottom: 40px;
          font-weight: bold;
        }

        .desc {

        }
      }
    }

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;

      .product-image {
        margin-top: 30px;
      }

      .product-info {
        margin-top: 30px;
        width: 90%;
        height: 50%;
      }
    }

  }
}
  
</style>