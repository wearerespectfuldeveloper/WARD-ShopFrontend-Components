import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

import Layout from '@/components/layout/layout.vue';


storiesOf('Components/Layout', module)
.addDecorator(withKnobs)
.add('Layout', () => ({
  components: { Layout },
  template: `<layout></layout>`,
}))
