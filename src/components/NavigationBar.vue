<template>
  <div class="row">
    <q-toolbar class="col-grow q-my-sm">
    <q-breadcrumbs class="text-grey" active-color="black">
      <template v-slot:separator></template>
      <q-breadcrumbs-el>
        <q-btn flat to="/">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 text-left">DUKT</q-item-label>
              <q-item-label class="text-left" caption lines="1">No fuzz, just flows.</q-item-label>
            </q-item-section>
          </q-item>
        </q-btn>
      </q-breadcrumbs-el>
      <q-breadcrumbs-el>
        <q-btn flat to="/me">
        <q-item>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-left">{{$auth.user.name}}</q-item-label>
            <q-item-label caption class="text-left" lines="1">user</q-item-label>
          </q-item-section>
        </q-item>
        </q-btn>
      </q-breadcrumbs-el>

      <q-breadcrumbs-el v-for="i in stack" :key="i._key">
        <q-btn flat :to="i.url">
          <q-item>
            <q-item-section>
              <q-item-label class="text-subtitle1 text-left">{{i.name}}</q-item-label>
              <q-item-label class="text-left" caption lines="1">{{ i.type }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-btn>
      </q-breadcrumbs-el>
    </q-breadcrumbs>
  </q-toolbar>
    <div class="col-3 bg-grey-10 text-white">
      <q-item class="q-ma-sm">
        <q-item-section>
          <q-item-label class="text-h6">{{last.name}}</q-item-label>
          <q-item-label class="text-white" caption>{{last.summary}}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavigationBar',
  components: { },
  props: [],
  data () {
    return {}
  },
  computed: {
    ...mapState('navigation', ['stack']),
    ...mapState('flows', ['flow']),
    last () {
      if (this.stack && this.stack.length > 0) {
        return this.stack[this.stack.length - 1]
      }

      return {
        name: this.$auth.user.name,
        summary: this.$auth.user.email
      }
    }
  },
  methods: {
    logout () {
      this.$auth.logout({
        returnTo: '/'
      })
    }
  }
}
</script>
<style>
.q-breadcrumbs--last {
  /*background-color: black;*/
}
</style>
