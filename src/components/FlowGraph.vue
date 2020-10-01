<template>
  <q-splitter
      :value="50"
    style="height: 400px"
  >

    <template v-slot:before>
      <div class="q-pa-md">
        <vue-pipeline ref="pipeline" :data.sync="items" :showArrow="true" @select="handleSelect"/>
      </div>
    </template>

    <template v-slot:after>
      <div class="q-pa-md">
        <div class="text-h4 q-mb-md">After</div>
        <div v-for="n in 20" :key="n" class="q-my-md">{{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</div>
      </div>
    </template>

  </q-splitter>
</template>

<script>
export default {
  name: 'FlowGraph',
  props: ['pipeline'],
  data () {
    return {}
  },
  computed: {
    items () {
      if (!this.pipeline) return []

      const result = []
      const p = this.pipeline

      this.pipeline.items.forEach(i => {
        let element
        if (i._type === 'flows') {
          element = {
            _key: i._key,
            name: 'start',
            hint: i.summary,
            status: 'start',
            next: []
          }
        } else {
          element = {
            _key: i._key,
            name: i.name,
            hint: i.summary,
            status: 'succeed',
            next: []
          }
        }

        i.next.forEach(n => {
          for (let i = 0; i < p.items.length; i++) {
            if (p.items[i]._key === n) {
              element.next.push({ index: i })
            }
          }
        })

        result.push(element)
      })

      return result
    }
  },
  methods: {
    handleSelect (item) {
      this.$emit('select', item)
    }
  }
}
</script>
