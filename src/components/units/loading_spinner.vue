<template>
<div class="loading-spinner">
  
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.loading-spinner {
  width: 3.5rem;
  height: 3.5rem;
  display: inline-block;
  border: 3px solid rgba(grey, 0.3);
  border-radius: 50%;
  border-top-color: grey;
  margin-bottom: 10rem;
  animation: 1s spin infinite ease-in-out;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
    
  }
}
  
</style>