<template>
  <q-page v-if="flow && pipeline" :padding="false" class="fit">
    <div class="row window-height">
      <div class="col-grow">
        <q-toolbar class="bg-grey-10 text-white">
          <q-tabs v-model="tab" active-color="white">
            <q-tab name="dashboard" label="Dashboard"/>
          </q-tabs>
        </q-toolbar>
        <q-tab-panels v-model="tab" animated  class="bg-grey-1">
          <q-tab-panel name="dashboard" class="flex flex-center">
            <FlowGraph v-if="pipeline" :pipeline="pipeline" @select="setCurrent"></FlowGraph>
            {{instance}}
          </q-tab-panel>
        </q-tab-panels>
      </div>
      <div class="col-3 bg-grey-10">
        <q-toolbar class="text-white">
          <q-space></q-space>
          <q-btn-group flat stretch>
          </q-btn-group>
        </q-toolbar>
        <q-card v-if="task && tab === 'definition'" flat square class="q-mr-xl">
          <q-card-section>
            <div class="row items-center no-wrap">
              <div class="col-grow">
                <q-item>
                  <q-item-section>
                    <q-item-label>{{task.name}}</q-item-label>
                    <q-item-label caption>{{task.summary}}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-btn flat color="negative" icon="delete">
                    </q-btn>
                  </q-item-section>
                </q-item>
              </div>
            </div>
          </q-card-section>
          <codemirror ref="cmTask" :value="taskRaw" :options="cmOptions" @input="saveTask"></codemirror>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import FlowGraph from 'components/FlowGraph'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'
import _ from 'lodash'

export default {
  name: 'Instance',
  data () {
    return {
      tab: 'dashboard',
      newTask: null,
      cmOptions: {
        theme: 'base16-dark',
        tabSize: 4,
        lineNumbers: true,
        mode: 'text/javascript'
      }
    }
  },
  components: { FlowGraph, codemirror },
  methods: {
    schedule () {
      this.$store.dispatch('flows/schedule', { ns: this.$router.currentRoute.params.ns, fk: this.flow._key })
    },
    setCurrent (node) {
      this.$store.dispatch('flows/getTask', { ns: this.$router.currentRoute.params.ns, fk: this.flow._key, tk: node._key })
    },
    taskCreated (task) {
      this.newTask = null
      this.setCurrent(task)
    },
    removeFlow () {
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove the ${this.flow.name} flow?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        return this.$store.dispatch('flows/removeFlow', this.flow._key).then(() => {
          return this.$router.push('/flows')
        })
      })
    },
    saveTask () {
      if (!this.task) {
        return
      }

      const content = this.$refs.cmTask.content

      try {
        const self = this
        let task
        try {
          task = JSON.parse(content)
        } catch (e) {
          return
        }

        if (self.task._key !== task._key) {
          self.$q.notify({
            type: 'negative',
            message: 'The _key field of the task may not be changed'
          })
          return
        }

        if (JSON.stringify(self.task, null, 4) === content) {
          return
        }

        self.$store.dispatch('flows/saveTask', { ns: self.$router.currentRoute.params.ns, fk: self.flow._key, task: task }).then(() => {
          self.$q.notify({
            type: 'positive',
            message: 'Task saved.'
          })
        }, (err) => {
          self.$q.notify({
            type: 'negative',
            message: 'Unable to save the task: ' + err
          })
        })
      } catch (e) {
        this.$q.notify({
          type: 'negative',
          message: e
        })
      }
    }
  },
  computed: {
    ...mapState('flows', ['flow', 'instance', 'pipeline']),
    ...mapState('namespaces', ['namespace']),
    ...mapGetters('flows', ['pipelineRaw']),
    taskRaw () {
      if (this.task) {
        return JSON.stringify(this.task, null, 4)
      }

      return ''
    }
  },
  created () {
    this.saveTask = _.debounce(this.saveTask, 500)
  },
  preFetch ({ store, currentRoute }) {
    return Promise.all([
      store.dispatch('namespaces/getNamespace', currentRoute.params.ns),
      store.dispatch('flows/getFlow', { ns: currentRoute.params.ns, fk: currentRoute.params.fk }),
      store.dispatch('flows/getInstance', { ns: currentRoute.params.ns, fk: currentRoute.params.fk, ik: currentRoute.params.ik })
    ]).then((results) => {
      return store.commit('navigation/set', { types: ['namespaces', 'flows', 'instances'], items: results })
    })
  }
}
</script>

<style>
.CodeMirror {
  /*height: 500px;*/
  height: auto;
}
</style>
