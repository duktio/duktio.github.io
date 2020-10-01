<template>
  <div class="row">
    <div class="col">
      <q-card>
        <q-card-section class="bg-primary text-white">
          <q-item dark class="bg-primary text-white">
            <q-item-section avatar>
              <q-icon size="lg" :name="icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ title }}</q-item-label>
              <q-item-label class="text-subtitle2">{{ subtitle }}</q-item-label>
            </q-item-section>
            <q-item-section side v-if="menuEnabled">
              <q-btn color="white" flat icon="more_vert">
                <q-menu auto-close max-width="300px">
                  <slot name="menu"></slot>
                </q-menu>
              </q-btn>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-separator v-if="contentEnabled" />
        <q-card-actions v-if="contentEnabled" align="right">
          <slot></slot>
        </q-card-actions>
      </q-card>
      <q-card flat bordered class="q-mt-lg" v-if="title !== $auth.user.name">
        <q-card-section>
          <q-item dark class="text-grey-5" clickable to="/me">
            <q-item-section avatar>
              <q-icon size="lg" name="face" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ $auth.user.name }}</q-item-label>
              <q-item-label class="text-subtitle2">{{ $auth.user.email }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SideNavigationBar',
  components: { },
  props: ['icon', 'title', 'subtitle', 'contentEnabled', 'menuEnabled'],
  data () {
    return {}
  },
  computed: {
    ...mapState('namespaces', ['namespaces'])
  },
  methods: {
    loadNamespaces () {
      return this.$store.dispatch('namespaces/getNamespaces')
    },
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
  background-color: black;
}
</style>
