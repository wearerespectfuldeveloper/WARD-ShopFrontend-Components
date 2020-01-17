import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';


// 페이지
import LandingPage from '@/components/pages/landing_page.vue';
import ProductDescPage from '@/components/pages/product_desc_page.vue';


storiesOf('Components/Pages', module)
  .addDecorator(withKnobs)
  .add('Landing Page', () => ({
    components: { LandingPage },
    template: `<landing-page></landing-page>`,
  }))
  .add('Product Desc Page', () => ({
    components: { ProductDescPage },
    template: `<product-desc-page></product-desc-page>`,
  }))

  