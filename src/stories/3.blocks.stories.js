import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, object, array } from '@storybook/addon-knobs';

// 블록
import Hero from '@/components/blocks/hero.vue';
import CardWithImage from '@/components/blocks/card_with_image.vue';
import ContentHeader from '@/components/blocks/content_header.vue';
import PageSidebar from '@/components/blocks/page_sidebar.vue';
import CommentBlock from '@/components/blocks/comment_block.vue';
import ProductMainDescCard from '@/components/blocks/product_main_desc_card.vue';
import ContentNavigation from '@/components/blocks/content_navigation.vue';
import PageHeader from '@/components/blocks/page_header.vue';
import EditorBlock from '@/components/blocks/editor_block.vue';

// 블록 마크다운
import hero_md from '@/assets/markdown/block/hero.md'
import card_with_image_md from '@/assets/markdown/block/card_with_image.md'


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
    notes: hero_md,
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
    
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
    notes: card_with_image_md,
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Page Sidebar', () => ({
    components: { PageSidebar },
    template: `
    <page-sidebar>
    </page-sidebar>
    `,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Content Header', () => ({
    components: { ContentHeader },
    template: `<content-header></content-header>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Product Main Desc Card', () => ({
    components: { ProductMainDescCard },
    template: `<product-main-desc-card></product-main-desc-card>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Comment Block', () => ({
    components: { CommentBlock },
    template: `<comment-block></comment-block>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Content Navigation', () => ({
    components: { ContentNavigation },
    template: `<content-navigation></content-navigation>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Page Header', () => ({
    components: { PageHeader },
    template: `<page-header></page-header>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  .add('Editor Block', () => ({
    components: { EditorBlock },
    template: `<editor-block></editor-block>`,
  }), {
    info: {
      summary: '컴포넌트 요약' // 꼭 어떤 값이던 넣어야 합니다
    }
  })
  