import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

// 유닛
import Divider from '@/components/units/divider.vue';
import BasicButton from '@/components/units/basic_button.vue';
import BasicSelectbar from '@/components/units/basic_selectbar.vue';
import ToggleButtonApps from '@/components/units/toggle_button_apps.vue';
import ToggleButtonMenu from '@/components/units/toggle_button_menu.vue';
import LoadingSpinner from '@/components/units/loading_spinner.vue';
import LoadingDots from '@/components/units/loading_dots.vue';


storiesOf('Components/Units', module)
  .addDecorator(withKnobs)
  .add('Divider', () => ({
    components: { Divider },
    template: `
    <divider>
    </divider>
    `,
  }))
  .add('Basic Button', () => ({
    components: { BasicButton },
    template: `
    <basic-button>
      장바구니
    </basic-button>
    `,
  }))
  .add('Basic Selectbar', () => ({
    components: { BasicSelectbar },
    template: `
    <basic-selectbar>
    </basic-selectbar>
    `,
  }))
  .add('Toggle Button Apps', () => ({
    components: { ToggleButtonApps },
    template: `
    <toggle-button-apps>
    </toggle-button-apps>
    `,
  }))
  .add('Toggle Button Menu', () => ({
    components: { ToggleButtonMenu },
    template: `
    <toggle-button-menu>
    </toggle-button-menu>
    `,
  }))
  .add('Loading Spinner', () => ({
    components: { LoadingSpinner },
    template: `
    <loading-spinner>
    </loading-spinner>
    `,
  }))
  .add('Loading Dots', () => ({
    components: { LoadingDots },
    template: `
    <loading-dots>
    </loading-dots>
    `,
  }))
  