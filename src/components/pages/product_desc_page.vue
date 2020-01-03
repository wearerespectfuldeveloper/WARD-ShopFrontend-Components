<template>
  <div class="product-desc-page">
    <default-page-template>
      <product-desc-content-section></product-desc-content-section>
    </default-page-template>
  </div>
  
</template>

<script>
// TEMPLATE
import DefaultPageTemplate from '@/components/templates/default_page_template.vue'

// SECTION
import ProductDescContentSection from '@/components/sections/content/product_desc_content_section.vue'


export default {
  components: {
    DefaultPageTemplate,
    ProductDescContentSection
  }
}
</script>

<style lang="scss">
.product-desc-page {
  
}
</style>
