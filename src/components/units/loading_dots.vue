<template>
<div class="loading-dots">
  <div class="bounce-1"></div>
  <div class="bounce-2"></div>
  <div class="bounce-3"></div>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.loading-dots {
  
  > div {
    width: 1.4rem;
    height: 1.4rem;
    background-color: rgba(grey, 0.6);
    border-radius: 50%;
    display: inline-block;
    animation: 1.5s bounce infinite ease-in-out both;
  }

  .bounce-1 {
    margin-right: 0.3rem;
  }
  .bounce-2 {
    margin-right: 0.3rem;
    animation-delay: 0.15s;
  }
  .bounce-3 {
    animation-delay: 0.30s;
  }

  @keyframes bounce {
    0%, 80%, 100% {
      transform: scale(0);
    }

    40% {
      transform: scale(1);
    }
  }

}
  
</style>