import { configure } from '@storybook/vue';
import { addDecorator } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

const req = require.context('../../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

 
addDecorator(withInfo)

configure(loadStories, module);
