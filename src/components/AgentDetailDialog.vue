<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin" style="width: 50vw; max-width: 1000px;">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ agent.public_key }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section>
        <ol>
          <li>
            <span class="text-subtitle2">Download the credentials file</span>
            <div>
              <p>The first step involves downloading the credentials file and saving it to a location accessible from the agent.</p>
              <q-btn color="primary" @click="onCredsDownload" class="q-mb-md">Download Credentials File</q-btn>
            </div>
          </li>
          <li>
            <span class="text-subtitle2">Run the agent</span>
            <div>
              <p>Point the agent to the correct credentials file</p>
              <pre>dukt-agent k8s --config {{ agent.publicKey }}.creds</pre>
            </div>
          </li>
          <li>
            <span class="text-subtitle2">Validate the agent is running</span>
            <div>
              <p>
                Once the agent is running, it might take a minute or so to see the "last updated" field being changed in the ui.
                If this is not the case, validate the output of the dukt-agent command or reach out to us.
              </p>
            </div>
          </li>
        </ol>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { exportFile } from 'quasar'

export default {
  name: 'AgentDetailDialog',
  props: ['value', 'agent'],
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
    onCredsDownload () {
      exportFile(`${this.agent.public_key}.creds`, this.creds)
    },
    onOKClick () {
      const namespace = {
        name: this.name,
        summary: this.summary
      }

      this.$store.dispatch('namespaces/create', namespace).then((result) => {
        this.$emit('ok', result.data)
        this.hide()
        this.step = 1
        this.name = ''
        this.summary = ''
      })
    },

    onCancelClick () {
      // we just need to hide dialog
      this.hide()
    }
  },
  computed: {
    creds () {
      return window.atob(this.agent.creds)
    }
  }
}
</script>
