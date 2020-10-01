<template>
  <q-page v-if="flow && pipeline" :padding="false" class="fit">
    <div class="row window-height">
      <div class="col-3 q-pa-lg">
        <side-navigation-bar :title="flow.name" :subtitle="flow.summary" icon="waves" :menu-enabled="true" :content-enabled="true">
          <template slot="default">
            <div class="col-grow">
              <q-btn-group spread unelevated>
                <q-btn stack icon="add" @click="createTask">Task</q-btn>
              </q-btn-group>
            </div>
          </template>

          <template slot="menu">
            <q-list>
              <q-item clickable @click="removeFlow" class="q-my-sm">
                <q-item-section avatar>
                  <q-icon size="md" name="delete" color="negative"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Remove</q-item-label>
                  <q-item-label caption>Remove the flow along with the tasks, triggers and instance information.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </side-navigation-bar>
      </div>
      <div class="col-9">
        <q-toolbar>
          <q-tabs v-model="tab" active-color="black">
            <q-tab name="definition" label="Definition"></q-tab>
            <q-tab name="instances" label="Instances"></q-tab>
          </q-tabs>
        </q-toolbar>
        <q-tab-panels v-model="tab" animated  class="bg-grey-1">
          <q-tab-panel name="definition" class="flex flex-center">
              <FlowGraph v-if="pipeline" :pipeline="pipeline" @select="setCurrent"></FlowGraph>
          </q-tab-panel>

          <q-tab-panel name="instances">
            <instance-list :instances="instances" @select="toInstance"></instance-list>
          </q-tab-panel>

          <q-tab-panel name="code" class="no-scroll">
            <div class="row q-gutter-md">
              <q-card class="col-grow">
                <q-toolbar>
                  <q-toolbar-title>{{flow.name}} code</q-toolbar-title>
                  <q-btn flat icon="save"></q-btn>
                </q-toolbar>
                <div class="col fit">
                  <codemirror :value="pipelineRaw" :options="cmOptions"></codemirror>
                </div>
              </q-card>
              <q-card style="width: 500px">
                <q-card-section>
                  <span class="text-h5">The flow editor</span>
                  <p>Having a nice flow to look at will certainly give you that fuzzy warm feeling, but there are times when you need to make changes. The flow editor allows for just that, plain and simple.</p>
                  <span class="text-h6">File layout</span>
                  <pre>{
  "_key": "",
  "name": "",
  "summary": "",
  "tasks": {},
  "transitions": [],
}</pre>
                </q-card-section>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
<!--      <div class="col-3 bg-grey-10">-->
<!--        <q-toolbar class="text-white">-->
<!--          <q-space></q-space>-->
<!--          <q-btn-group flat stretch>-->
<!--            <q-btn flat icon="add" @click="newTask = {}">Create Task</q-btn>-->
<!--            <q-btn flat icon="send" @click="schedule">launch</q-btn>-->
<!--            <q-btn flat icon="delete" color="negative" @click="removeFlow">remove</q-btn>-->
<!--          </q-btn-group>-->
<!--        </q-toolbar>-->
<!--        <q-card v-if="task && tab === 'definition'" flat square class="q-mr-xl">-->
<!--          <q-card-section>-->
<!--            <div class="row items-center no-wrap">-->
<!--              <div class="col-grow">-->
<!--                <q-item>-->
<!--                  <q-item-section>-->
<!--                    <q-item-label>{{task.name}}</q-item-label>-->
<!--                    <q-item-label caption>{{task.summary}}</q-item-label>-->
<!--                  </q-item-section>-->
<!--                  <q-item-section side>-->
<!--                    <q-btn flat color="negative" icon="delete">-->
<!--                    </q-btn>-->
<!--                  </q-item-section>-->
<!--                </q-item>-->
<!--              </div>-->
<!--            </div>-->
<!--          </q-card-section>-->
<!--          <codemirror ref="cmTask" :value="taskRaw" :options="cmOptions" @input="saveTask"></codemirror>-->
<!--        </q-card>-->
<!--      </div>-->
    </div>
    <task-create-dialog :value="newTask" :flow="flow._key" :triggers="pipeline.items" @cancel="newTask = null" @created="taskCreated"></task-create-dialog>
  </q-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import FlowGraph from 'components/FlowGraph'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-dark.css'
import 'codemirror/mode/javascript/javascript.js'
import TaskCreateDialog from 'components/TaskCreateDialog'
import _ from 'lodash'
import InstanceList from 'components/InstanceList'
import SideNavigationBar from 'components/SideNavigationBar'

export default {
  name: 'Flow',
  data () {
    return {
      tab: 'definition',
      newTask: null,
      cmOptions: {
        theme: 'base16-dark',
        tabSize: 4,
        lineNumbers: true,
        mode: 'text/javascript'
      }
    }
  },
  components: { SideNavigationBar, InstanceList, TaskCreateDialog, FlowGraph, codemirror },
  methods: {
    toInstance (instance) {
      this.$router.push(`/me/namespaces/${this.namespace._key}/flows/${this.flow._key}/instances/${instance._key}`)
    },
    createTask () {
      const self = this

      this.$q.dialog({
        component: TaskCreateDialog,
        parent: this,
        flow: this.flow
      }).onOk((result) => {
        self.tab = 'definition'

        return self.$store.dispatch('flows/createTask', { flowKey: self.flow._key, task: result })
      })
    },
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
    ...mapState('flows', ['flow', 'task', 'pipeline', 'instances']),
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
    const nk = `_system*namespaces:${currentRoute.params.ns}`
    const fk = `${currentRoute.params.ns}*flows/${currentRoute.params.fk}`

    return Promise.all([
      store.dispatch('namespaces/getNamespace', nk),
      store.dispatch('flows/getFlow', fk),
      store.dispatch('flows/getInstances', fk)
    ]).then((results) => {
      return store.commit('navigation/set', { types: ['namespaces', 'flows'], items: results })
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
