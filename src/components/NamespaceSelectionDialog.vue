<template>
  <q-dialog v-model="value" persistent transition-show="scale" transition-hide="scale">
    <q-card class="bg-blue text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Select Namespace</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-caption">
        Please select the namespace in which you want to work.
      </q-card-section>

      <q-card-section>
        <q-list bordered class="bg-white text-blue q-mb-lg">
          <q-item clickable v-ripple v-for="(role, ns) in namespaces" :key="ns" @click="selectNamespace(ns)">
            <q-item-section>
              <q-item-label>{{ ns }}</q-item-label>
              <q-item-label caption>{{ role }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple @click="create=true">
            <q-item-section>
              <q-item-label v-if="!create">Create a new one</q-item-label>
<!--              <q-item-label caption>{{ role }}</q-item-label>-->
              <q-input v-else bottom-slots v-model="newNamespace" label="Name">
                <template v-slot:after>
                  <q-btn round dense flat icon="send" @click="createNamespace" />
                </template>
              </q-input>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'NamespaceSelectionDialog',
  props: ['value', 'namespaces'],
  data () {
    return {
      create: false,
      newNamespace: ''
    }
  },
  methods: {
    selectNamespace (namespace) {
      this.$store.commit('namespaces/setNamespace', namespace)
      this.$emit('select', namespace)
    },
    createNamespace () {
      this.$store.dispatch('namespaces/create', this.newNamespace).then(value => {
        this.$store.commit('namespaces/setNamespace', this.newNamespace)
        this.$emit('select', this.newNamespace)
      })
    }
  }
}
</script>
