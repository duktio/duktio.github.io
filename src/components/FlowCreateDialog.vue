<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 50vw; max-width: 1000px;">
      <div class="row">
        <div class="col-5 bg-black text-white q-pa-lg" style="min-height: 500px;">
          <span class="text-h5">New Flow</span>
          <p class="q-mt-lg">
            A flow is a collection of tasks which can be triggered for execution. Transitions explain how to traverse
            from one task to the next, effectively forming a Directed Acyclic Graph (DAG).
          </p>
        </div>
        <div class="column col-grow justify-between">
          <div>
            <q-list class="q-pa-lg">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Name</q-item-label>
                  <q-item-label caption>What should be the name of your new flow?</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="q-pt-none">
                <q-item-section  class="q-pt-none">
                  <q-input outlined v-model="name"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Summary</q-item-label>
                  <q-item-label caption>Explain in one line what your flow is all about.</q-item-label>
                </q-item-section>
              </q-item>
              <q-item class="q-pt-none">
                <q-item-section  class="q-pt-none">
                  <q-input outlined v-model="summary"/>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="q-pa-lg">
            <q-space></q-space>
            <q-btn flat label="Cancel" color="grey" @click="onCancelClick" />
            <q-btn unelevated color="primary" @click="onOKClick" label="Create" class="q-ml-sm" />
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'FlowCreateDialog',
  props: ['value'],
  data () {
    return {
      step: 1,
      name: '',
      summary: ''
    }
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },
    hide () {
      this.$refs.dialog.hide()
    },
    onDialogHide () {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit('hide')
    },

    onOKClick () {
      const flow = {
        name: this.name,
        summary: this.summary,
        tasks: {},
        transitions: []
      }

      this.$emit('ok', flow)
      this.step = 1
      this.name = ''
      this.summary = ''
    },

    onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
  },
  computed: {
  }
}
</script>
