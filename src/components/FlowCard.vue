<template>
  <q-card square flat bordered>
    <q-card-section v-if="flow">
      <q-item>
        <q-item-section>
          <q-item-label>{{flow.name}}</q-item-label>
          <q-item-label caption>{{flow.summary}}</q-item-label>
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
  name: 'FlowCard',
  props: ['flow'],
  data () {
    return {}
  }
}
</script>
