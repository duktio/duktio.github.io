<template>
  <q-layout view="hHh lpR fFf" class="fit">
<!--    <navigation-bar></navigation-bar>-->
    <q-page-container class="fit">
      <router-view />
    </q-page-container>
    <div class="branding">
      <div class="text-h6">DUKT</div>
      <div class="text-subtitle2">No fuzz, just flows.</div>
    </div>
  </q-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: { },
  data () {
    return {
      miniState: true,
      leftDrawerOpen: false,
      search: '',
      storage: 0.26,
      links: [
        { icon: 'dashboard', text: 'Dashboard', to: '/dashboard' }
      ]
    }
  },
  computed: {
    ...mapState('namespaces', ['namespaces', 'namespace'])
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
    }
  },
  preFetch ({ store }) {
    return store.dispatch('auth/getToken')
  }
}
</script>

<style lang="sass">
  .branding
    position: fixed
    left: 20px
    bottom: 20px
    color: #d1d1d1
</style>
