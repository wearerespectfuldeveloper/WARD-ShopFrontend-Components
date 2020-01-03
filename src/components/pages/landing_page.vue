<template>
  <div class="landing-page">
    <default-page-template>
      <landing-header></landing-header>
      <landing-content></landing-content>
    </default-page-template>
  </div>
  
</template>

<script>
// TEMPLATE
import DefaultPageTemplate from '@/components/templates/default_page_template.vue'

// SECTION
import LandingHeader from '@/components/sections/content/landing_header_section.vue'
import LandingContent from '@/components/sections/content/landing_content_section.vue'

export default {
  components: {
    DefaultPageTemplate,
    LandingHeader,
    LandingContent
  }
}
</script>

<style lang="scss">
.landing-page {
  
}
</style>
