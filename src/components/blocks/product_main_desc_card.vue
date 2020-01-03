<template>
<div class="product-main-desc-card"
   :style="{
    'width': width,
    'height': height,
  }"
>
  <div class="product elevation-1">
    <div class="product-image"
      :style="{
        'background-image': `url(${product_image})`,
        'width': image_width,
        'height': image_height
      }"
    >
      
    </div>

    <div class="product-info">
      <div class="name font--f4">
        {{product_name}}
      </div>
      <div class="desc font--f5" v-html="product_desc">
      </div>

      <div class="extra-feature">
        <slot name="extra-feature"></slot>
      </div>
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
      default: ''
    },
    image_width: {
      type: String,
      default: '50%'
    },
    image_height: {
      type: String,
      default: '500px'
    },
    product_image: {
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

  .product {
    display: flex;
    justify-content: center;
    width: 80%;
    background-color: white;

    .product-image {
      background-repeat: no-repeat;
      background-size: cover;
    }

    .product-info {
      width: 50%;
      padding: 38px;
      height: 500px;
      overflow: auto;

      .name {
        margin-bottom: 40px;
        font-weight: bold;
      }

      .desc {

      }

    }
  }
}
  
</style>