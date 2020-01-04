<template>
<div 
  class="editor-block" 
  :style="{'width': width, 'height': height}"
  @focusout="saveData"
>
  <!-- <input class="block-title" type="text" /> -->
  <div :id="block_id" class="editor"></div>
</div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import LinkTool from '@editorjs/link';
import Checklist from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';



export default {
  data() {
    return {
      editor_obj: null,
      data_obj: null,
    }
  },
  props: {
    width: {
      type: String,
      default: '50vw'
    },
    height: {
      type: String,
      default: ''
    },
    // 이 ID 를 바탕으로 서버에서 어떤 데이터를 받아올지를 결정한다.
    block_id: {
      type: String,
      default: 'editor'
    }
  },
  methods: {
    saveData () {
      this.editor_obj.save().then(data => {
        const json_data = JSON.stringify(data);
        localStorage.setItem(this.block_id, json_data);
      })
    }

  },
  mounted() {
    // 서버로부터 데이터를 받아온다.

    // 로컬(브라우저)에서 데이터를 받아온다.
    const imported_data = JSON.parse(localStorage.getItem(this.block_id));

    // 로컬 데이터를 에디터에 넣는다. 로컬 데이터가 없다면 서버에서 받아온 데이터를 넣는다.
    if (imported_data === null) {
      console.log('no imported data!');
    }

    // 에디터 초기화
    this.editor_obj = new EditorJS({
      holder: this.block_id,
      tools: {
        header: {
          class: Header,
          config: {
            placeholder: 'Enter a header'
          }
        },
        embed: {
          class: Embed,
          inlineToolbar: false,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        },
        image: SimpleImage,
        linkTool: {
          class: LinkTool,
          config: {
            endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching
          }
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        delimiter: Delimiter,
      },
      data: imported_data
    });
  },
}
</script>

<style lang="scss">

.editor-block {
  position: relative;
}

.block-title {
  outline: none;
  border: none;
  margin-bottom: 20px;
  padding: 10px;
  width: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.editor > .codex-editor > .codex-editor__redactor {
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  border-radius: 5px;

  > .editor > .ce-block {

  }
}


</style>