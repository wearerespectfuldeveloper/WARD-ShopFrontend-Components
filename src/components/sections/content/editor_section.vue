<script>
import EditorBlock from '@/components/blocks/editor_block.vue'
import { create } from 'domain'

export default {
  data () {
    return {
      editor_block_list: [
        {id: 'test_block', user_id: 'user-1'}
      ]
    }
  },
  components: {
    EditorBlock
  },
  render (createElement) {
    return createElement('div', 
      {
        class: "editor-section",
      },
      [
        ...this.editor_block_list.map(x => {
          return createElement('editor-block',
            {
              props: {
                block_id: x.id + x.user_id
              }
            }
          ) 
        })
      ]
    )
  },
  methods: {
    createEditorBlock (id, user_id) {
      this.editor_block_list.push()
    }
  }
}

</script>

<style lang="scss" scoped>
.editor-section {
  min-height: 100vh;
  max-height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;

  .editor-block {
    width: 50vw;
  }

  @media screen and (max-width: 700px) {
    .editor-block {
      width: 90vw;
    }
  }
}
  
</style>