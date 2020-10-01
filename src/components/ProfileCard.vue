<template>
  <q-card square flat bordered>
    <q-img
      :src="user.picture"
      height="200px"
      :img-style="{filter: 'grayscale(100%)'}"
      basic
    >
    </q-img>
    <q-card-section>
      <q-item>
        <q-item-section>
          <q-item-label>{{user.name}}</q-item-label>
          <q-item-label caption>{{user.email}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Profile',
  props: ['user'],
  data () {
    return {}
  }
}
</script>
