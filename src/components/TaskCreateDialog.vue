<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 50vw; max-width: 1000px;">
      <div class="row">
        <div class="col-5 bg-black text-white q-pa-lg" style="min-height: 500px;">
          <span class="text-h5">New Task</span>
          <p class="q-mt-lg">
            A task is the unit of execution within a flow. A flow is usually built out of a number of tasks, each responsible
            for performing a part of the execution
          </p>
          <p class="q-mt-lg">
            When a flow is scheduled, the tasks are converted into jobs which are to be executed through the agent in your environment.
            Therefore, you may want to configure the task with a valid container image and corresponding parameters.
          </p>
        </div>
        <div class="column col-grow justify-between">
          <div>
            <q-list class="q-pa-lg">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6">Name</q-item-label>
                  <q-item-label caption>What should be the name of your new task?</q-item-label>
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
                  <q-item-label caption>Explain in one line what your task is meant to do.</q-item-label>
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
  name: 'TaskCreateDialog',
  props: ['value', 'flow'],
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
      const task = {
        name: this.name,
        summary: this.summary,
        previous: this.flow._key
      }

      this.$emit('ok', task)
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
