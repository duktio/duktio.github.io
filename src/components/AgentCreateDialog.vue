<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 50vw; max-width: 1000px;">
      <div class="row">
        <div class="col-5 bg-black text-white q-pa-lg" style="min-height: 500px;">
          <span class="text-h5">New Agent</span>
          <p class="q-mt-lg">
            An agent represents the process running on your side of the fence. It connects your environment with dukt and allows
            for flows to be scheduled.
          </p>
          <p class="q-mt-lg">
            An agent needs information to identify with dukt, so you will need to pass some credentials when starting your agent.
            These credentials are available in the form of a credential file, which can be downloaded once the agent has been
            created in the dukt platform.
          </p>
        </div>
        <div class="column col-7 justify-center text-center">
          <div class="column">
            <div>
              <q-btn unelevated color="primary" @click="onOKClick" label="Create" class="q-ml-sm" />
              <q-btn flat label="Cancel" color="grey" @click="onCancelClick" />
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'NamespaceCreateDialog',
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
      this.$emit('ok', {})
      this.hide()
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
