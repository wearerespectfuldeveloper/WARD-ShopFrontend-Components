import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

// 레이아웃 섹션
import HeaderSection from '@/components/sections/layout/header_section.vue';
import SidebarSection from '@/components/sections/layout/sidebar_section.vue';

storiesOf('Components/Layout Sections', module)
.addDecorator(withKnobs)
.add('Header Section', () => ({
  components: { HeaderSection },
  template: `<header-section></header-section>`,
}))
.add('Sidebar Section', () => ({
  components: { SidebarSection },
  template: `<sidebar-section></sidebar-section>`,
}))

