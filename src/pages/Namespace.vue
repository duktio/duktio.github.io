<template>
  <q-page :padding="false" class="fit">
    <div class="row window-height">
      <div class="col-3 q-pa-lg">
        <side-navigation-bar :title="namespace.name" :subtitle="namespace.summary" icon="amp_stories" :menu-enabled="true" :content-enabled="true">
          <template slot="default">
            <div class="col-grow">
              <q-btn-group spread unelevated>
                <q-btn stack icon="add" @click="createFlow">Flow</q-btn>
                <q-btn stack icon="add" @click="createAgent">Agent</q-btn>
              </q-btn-group>
            </div>
          </template>

          <template slot="menu">
            <q-list>
              <q-item clickable @click="removeNamespace" class="q-my-sm">
                <q-item-section avatar>
                  <q-icon size="md" name="delete" color="negative"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Remove</q-item-label>
                  <q-item-label caption>Remove the namespace and everything within.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </side-navigation-bar>
      </div>

      <div class="col-grow q-pa-lg">
        <q-toolbar>
          <q-tabs v-model="tab" active-color="black">
            <q-tab name="flows" label="Flows"></q-tab>
            <q-tab name="agents" label="Agents"></q-tab>
          </q-tabs>
        </q-toolbar>
        <q-tab-panels v-model="tab">
          <q-tab-panel name="flows">
            <FlowList :flows="flows" @select="gotoFlow" @create="createFlow" @remove="removeFlow"></FlowList>
          </q-tab-panel>
          <q-tab-panel name="agents">
            <AgentList :agents="agents" @create="createAgent" @remove="removeAgent"></AgentList>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import FlowList from 'components/FlowList'
import FlowCreateDialog from 'components/FlowCreateDialog'
import { go } from 'src/router'
import AgentList from 'components/AgentList'
import SideNavigationBar from 'components/SideNavigationBar'
import AgentCreateDialog from 'components/AgentCreateDialog'

export default {
  name: 'Namespace',
  components: { SideNavigationBar, AgentList, FlowList },
  computed: {
    ...mapState('flows', ['flows']),
    ...mapState('namespaces', ['namespace']),
    ...mapState('agents', ['agents'])
  },
  data () {
    return {
      tab: 'flows'
    }
  },
  methods: {
    gotoFlow (flow) {
      go(this, flow._key)
    },
    createAgent () {
      const nk = this.namespace._key
      const self = this

      this.$q.dialog({
        component: AgentCreateDialog,
        parent: this
      }).onOk((result) => {
        self.tab = 'agents'

        return self.$store.dispatch('agents/create', { nk: nk }).then((result) => {
          return self.$store.dispatch('agents/getAgents', { nk: nk })
        })
      })
    },
    removeAgent (agent) {
      const nk = this.namespace._key
      const a = agent
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove agent ${a.public_key}?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('agents/remove', { nk: nk, ak: a.public_key }).then(() => {
          this.$q.notify({
            type: 'positive',
            message: `Removed agent ${a.public_key}`
          })
        })
      })
    },
    createFlow () {
      const nk = this.namespace._key
      const self = this
      this.$q.dialog({
        component: FlowCreateDialog,
        parent: this
      }).onOk((result) => {
        return this.$store.dispatch('flows/createFlow', { nk: nk, flow: result }).then((result) => {
          return go(self, result._key)
        })
      })
    },
    removeFlow (flow) {
      const flw = flow
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove the ${flw.name} flow?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('flows/removeFlow', flw._key).then(() => {
          this.$q.notify({
            type: 'positive',
            message: `Removed the ${flw.name} flow.`
          })
        })
      })
    },
    removeNamespace () {
      const self = this
      const ns = this.namespace
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove the ${ns.name} namespace?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        self.$store.dispatch('namespaces/remove', ns._key).then(() => {
          self.$q.notify({
            type: 'positive',
            message: `Removed the ${ns.name} namespace.`
          })

          self.$router.push('/me')
        })
      })
    }
  },
  preFetch ({ store, currentRoute }) {
    const nk = `_system*namespaces:${currentRoute.params.ns}`

    return Promise.all([
      store.dispatch('namespaces/getNamespace', nk),
      store.dispatch('flows/getFlows', nk),
      store.dispatch('agents/getAgents', { nk: nk })
    ]).then((results) => {
      return store.commit('navigation/set', { types: ['namespaces'], items: [results[0]] })
    })
  }
}
</script>
