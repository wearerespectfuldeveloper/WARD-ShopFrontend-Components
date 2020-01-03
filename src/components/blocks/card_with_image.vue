<template>
  <div 
    class="card-with-image elevation-1"
    :style="{
      'width': width,
      'border-radius': border_radius
    }"
  >
    <div class="card-header">
      <div class="card-thumnail"
        :style="{
          'backgroundImage': `url(${thumnail_image})`,
          'height': thumnail_height
        }"
      >
      </div>
    </div>
    <div class="card-body">
      <h1 class="card-title font--f4">
        {{title}}
      </h1>
      <span class="card-text font--small">
        {{text}}
      </span>
      <div class="card-buttons">
        <a class="card-button font--link">
          {{button_text}}
        </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '250px'
    },
    border_radius: {
      type: String,
      default: '4px'
    },
    thumnail_height: {
      type: String,
      default: '200px'
    },
    thumnail_image: {
      type: String,
      default: 'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    },
    title: {
      type: String,
      default: '상품 이름'
    },
    text: {
      type: String,
      default: '상품 설명'
    },
    button_text: {
      type: String,
      default: '더 보기'
    }
  }
}
</script>

<style lang="scss" scoped>

.card-with-image {
  overflow: hidden;
  .card-header {
    .card-thumnail {
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .card-body {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;

    .card-title {
      margin-bottom: 20px;
    }

    .card-text {
      margin-bottom: 10px;
    }

    .card-buttons {
      display: flex;
      width: 100%;

      justify-content: flex-end;

      .card-button {
        cursor: pointer;

      }
      
    }
  }

}

</style>
