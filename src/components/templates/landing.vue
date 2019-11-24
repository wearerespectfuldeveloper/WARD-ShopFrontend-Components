<template>
  <div class="page-wrapper">
    <header>
      <slot name="header"></slot>
    </header>

    <main>
      <nav>
        <slot name="section-navigation"></slot>
      </nav>

      <section>
        <slot name="top-section"></slot>
      </section>
      
      <section>
        <slot name="bottom-section"></slot>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>

// -------------------- GRID LAYOUT CONTROL

.page-wrapper {
  @include normal-grid;

}
</style>