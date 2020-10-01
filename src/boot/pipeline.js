import VuePipeline from 'vue-pipeline'
import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-coy.css'
import 'prismjs/components/prism-scss.min'
import 'prismjs/plugins/autolinker/prism-autolinker.min'
import 'prismjs/plugins/autolinker/prism-autolinker.css'

import vueDebounce from 'vue-debounce'

export default async ({ Vue }) => {
  Vue.use(VuePipeline)
  Vue.use(require('vue-moment'))
  Vue.use(vueDebounce, {
    listenTo: ['input', 'keyup']
  })
}
