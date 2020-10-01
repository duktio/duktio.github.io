<template>
  <q-page :padding="false" class="fit">
    <div class="row window-height">
      <div class="col-3 q-pa-lg">
        <side-navigation-bar :title="$auth.user.name" :subtitle="$auth.user.email" icon="face" :menu-enabled="true">
          <template slot="menu">
            <q-list>
              <q-item clickable @click="logout" class="q-my-sm">
                <q-item-section avatar>
                  <q-icon size="md" name="exit_to_app" color="primary"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                  <q-item-label caption>Log out of dukt.</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </template>
        </side-navigation-bar>
      </div>

      <div class="col-9 q-pa-lg">
        <q-card style="width: 50vw; max-width: 1000px;">
          <q-card-section>
            <ol>
              <li>
                <span class="text-subtitle2">Download the commandline interface client</span>
                <div>
                  <p>Before you can get started, you will need to download the CLI client for your system.</p>
                  <q-btn color="primary" class="q-mb-md q-mr-lg">Linux</q-btn>
                  <q-btn color="primary" class="q-mb-md q-mr-lg">Mac OS</q-btn>
                  <p>
                    Put the executable somewhere in your path:
                  </p>
                  <pre>mv ./dukt /usr/local/bin/</pre>
                </div>
              </li>
              <li>
                <span class="text-subtitle2">Download the credentials file</span>
                <div>
                  <p>The credentials file contains the information needed for the client to identify itself</p>
                  <q-btn color="primary" @click="onCredsDownload" class="q-mb-md">Download Credentials File</q-btn>
                  <p>
                    Move the credentials file to your home directory:
                  </p>
                  <pre>mkdir ~/.dukt && mv ./cli.creds ~/.dukt/cli.creds</pre>
                </div>
              </li>
              <li>
                <span class="text-subtitle2">Run the client</span>
                <div>
                  <p>The client will pick up the credentials file from ~/.dukt/cli.creds</p>
                  <pre>dukt me</pre>
                </div>
              </li>
            </ol>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapState } from 'vuex'
import SideNavigationBar from 'components/SideNavigationBar'
import { exportFile } from 'quasar'
export default {
  name: 'profile',
  components: { SideNavigationBar },
  data: () => {
    return {
      tab: 'namespaces'
    }
  },
  methods: {
    // Log the user in
    login () {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    },
    onCredsDownload () {
      const creds = this.me.token.creds
      exportFile('cli.creds', window.atob(creds))
    }
  },
  computed: {
    ...mapState('auth', ['me'])
  },
  mounted () {
    this.$auth.getTokenSilently().then(t => {
      this.token = t
    })
  },
  preFetch ({ store }) {
    return store.dispatch('auth/getMe')
  }
}
</script>
