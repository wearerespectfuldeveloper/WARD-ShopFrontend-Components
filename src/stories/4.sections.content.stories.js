import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';


// 콘텐츠 섹션
import EditorSection from '@/components/sections/content/editor_section.vue';
import LandingContentSection from '@/components/sections/content/landing_content_section.vue';
import LandingHeaderSection from '@/components/sections/content/landing_header_section.vue';
import ProductDescContentSection from '@/components/sections/content/product_desc_content_section.vue';

storiesOf('Components/Content Sections', module)
  .addDecorator(withKnobs)
  .add('Editor Section', () => ({
    components: { EditorSection },
    template: `<editor-section></editor-section>`,
  }))
  .add('Landing Content Section', () => ({
    components: { LandingContentSection },
    template: `<landing-content-section></landing-content-section>`,
  }))
  .add('Landing Header Section', () => ({
    components: { LandingHeaderSection },
    template: `<landing-header-section></landing-header-section>`,
  }))
  .add('Product Desc Content Section', () => ({
    components: { ProductDescContentSection },
    template: `<product-desc-content-section></product-desc-content-section>`,
  }))