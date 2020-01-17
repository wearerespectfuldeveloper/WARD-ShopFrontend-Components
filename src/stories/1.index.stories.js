import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

import Result from '@/components/result/result.vue';

storiesOf('Result Application', module)
  .addDecorator(withKnobs)
  .add('Result', () => ({
    components: { Result },
    template: `<result></result>`,
  }))
  