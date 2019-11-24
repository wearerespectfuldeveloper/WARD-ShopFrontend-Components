/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';



// 레이아웃 컴포넌트
import NavigationDrawer from '@/components/layout/navigation_drawer.vue';

// 페이지 컴포넌트
import Hero from '@/components/page/hero.vue';
import Card from '@/components/page/card.vue';
import ContentHeader from '@/components/page/content_header.vue';

storiesOf('components/layout', module)
  .add('Navigation Drawer', () => ({
    components: { NavigationDrawer },
    template: '<navigation-drawer @click="action"></navigation-drawer>',
    methods: { action: action('clicked') }
  }))

storiesOf('components/page', module)
  .add('Card', () => ({
    components: { Card },
    template: '<card @click="action"></card>',
    methods: { action: action('clicked') }
  }))
  .add('Content Header', () => ({
    components: { ContentHeader },
    render() {
      return <content-header onClick={this.action}></content-header>;
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('Hero', () => ({
    components: { Hero },
    template: '<hero @click="action"></hero>',
    methods: { action: action('clicked') }
  }))