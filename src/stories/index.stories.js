/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';


// ----------------- MARKDOWN

// 유닛 마크다운

// 블록 마크다운
import hero_md from '@/assets/markdown/block/hero.md'
import card_with_image_md from '@/assets/markdown/block/card_with_image.md'

// 섹션 마크다운

// 템플릿 마크다운

// 페이지 마크다운




// ----------------- COMPONENTS


// 유닛
import Divider from '@/components/units/divider.vue';
import BasicButton from '@/components/units/basic_button.vue';
import BasicSelectbar from '@/components/units/basic_selectbar.vue';
import ToggleButtonApps from '@/components/units/toggle_button_apps.vue';
import ToggleButtonMenu from '@/components/units/toggle_button_menu.vue';



// 블록
import Hero from '@/components/blocks/hero.vue';
import CardWithImage from '@/components/blocks/card_with_image.vue';
import ContentHeader from '@/components/blocks/content_header.vue';
import NavigationDrawer from '@/components/blocks/navigation_drawer.vue';
import CommentBlock from '@/components/blocks/comment_block.vue';
import ProductMainDescCard from '@/components/blocks/product_main_desc_card.vue';
import ContentNavigation from '@/components/blocks/content_navigation.vue';
import PageHeader from '@/components/blocks/page_header.vue';
import EditorBlock from '@/components/blocks/editor_block.vue';




// 콘텐츠 섹션
import EditorSection from '@/components/sections/content/editor_section.vue';
import LandingContentSection from '@/components/sections/content/landing_content_section.vue';
import LandingHeaderSection from '@/components/sections/content/landing_header_section.vue';
import ProductDescContentSection from '@/components/sections/content/product_desc_content_section.vue';


// 레이아웃 섹션
import HeaderSection from '@/components/sections/layout/header_section.vue';
import DrawerSection from '@/components/sections/layout/drawer_section.vue';


// 페이지
import LandingPage from '@/components/pages/landing_page.vue';
import ProductDescPage from '@/components/pages/product_desc_page.vue';
import Layout from '@/components/layout/layout.vue';


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
      클릭
    </basic-button>
    `,
  }))
  .add('Basic Selectbar', () => ({
    components: { BasicSelectbar },
    template: `
    <basic-selector>
    </basic-selector>
    `,
  }))
  .add('Toggle Button', () => ({
    components: { ToggleButtonApps },
    template: `
    <toggle-button-apps>
    </toggle-button-apps>
    `,
  }))
  .add('Toggle Button', () => ({
    components: { ToggleButtonMenu },
    template: `
    <toggle-button-menu>
    </toggle-button-menu>
    `,
  }))
  

storiesOf('Components/Blocks', module)
  .addDecorator(withKnobs)
  .add('Hero', () => ({
    components: { Hero },
    props: {
      width: {
        type: String,
        default: text('width','100%')
      },
      height: {
        type: String,
        default: text('height','400px')
      },
      title: {
        type: String,
        default: text('title','We Are Resfectful Developers')
      },
      text: {
        type: String,
        default: text('text','우리는 모두 존중 받는 개발자들입니다')
      },
      button_text: {
        type: String,
        default: text('button_text','소개 페이지')
      }
    },
    template: `
    <hero
      :width="width"
      :height="height"
      :title="title"
      :text="text"
      :button_text="button_text"
    >
    </hero>
    `,
  }),{
    notes: hero_md
  })
  .add('Card With Image', () => ({
    components: { CardWithImage },
    props: {
      width: {
        type: String,
        default: text('width','250px')
      },
      border_radius: {
        type: String,
        default: text('border_radius','4px')
      },
      thumnail_height: {
        type: String,
        default: text('thumnail_height','200px')
      },
      thumnail_image: {
        type: String,
        default: text('thumnail_image','https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
      },
      title: {
        type: String,
        default: text('title','상품 이름')
      },
      text: {
        type: String,
        default: text('text','상품 설명')
      },
      button_text: {
        type: String,
        default: text('button_text','더 보기')
      }
    },
    template: `
    <card-with-image
      :width="width"
      :border_radius="border_radius"
      :thumnail_height="thumnail_height"
      :thumnail_image="thumnail_image"
      :title="title"
      :text="text"
      :button_text="button_text"
    >
    </card-with-image>`,
  }),{
    notes: card_with_image_md
  })
  .add('Navigation Drawer', () => ({
    components: { NavigationDrawer },
    template: `
    <navigation-drawer>
    </navigation-drawer>
    `,
  }))
  .add('Content Header', () => ({
    components: { ContentHeader },
    template: `<content-header></content-header>`,
  }))
  .add('Product Main Desc Card', () => ({
    components: { ProductMainDescCard },
    template: `<product-main-desc-card></product-main-desc-card>`,
  }))
  .add('Comment Block', () => ({
    components: { CommentBlock },
    template: `<comment-block></comment-block>`,
  }))
  .add('Content Navigation', () => ({
    components: { ContentNavigation },
    template: `<content-navigation></content-navigation>`,
  }))
  .add('Page Header', () => ({
    components: { PageHeader },
    template: `<page-header></page-header>`,
  }))
  .add('Editor Block', () => ({
    components: { EditorBlock },
    template: `<editor-block></editor-block>`,
  }))
  
  
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

storiesOf('Components/Layout Sections', module)
  .addDecorator(withKnobs)
  .add('Header Section', () => ({
    components: { HeaderSection },
    template: `<header-section></header-section>`,
  }))
  .add('Drawer Section', () => ({
    components: { DrawerSection },
    template: `<drawer-section></drawer-section>`,
  }))


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

storiesOf('Components/Layout', module)
  .addDecorator(withKnobs)
  .add('Layout', () => ({
    components: { Layout },
    template: `<layout></layout>`,
  }))
  