<template>
  <q-card square flat class="bg-grey-10 text-white">
    <q-card-section v-if="namespace">
      <q-item>
        <q-item-section>
          <q-item-label>{{namespace.name}}</q-item-label>
          <q-item-label caption>{{namespace.summary}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge>{{namespace.version}}</q-badge>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-card-section v-else>
      loading...
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'NamespaceCard',
  props: ['namespace'],
  data () {
    return {}
  }
}
</script>
