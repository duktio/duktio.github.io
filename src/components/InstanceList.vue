<template>
  <q-table
    flat
    v-if="instances && instances.total > 0"
    :data="instances.items"
    :columns="columns"
    row-key="name"
    @row-click="onRowSelected"
    no-data-label="I didn't find anything for you"
  >
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
<!--        <q-btn flat icon="delete_outline" color="negative" @click.prevent="$emit('remove', props.row)"></q-btn>-->
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'InstanceList',
  components: { },
  props: ['instances'],
  data () {
    return {
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: '_key', sortable: true, style: 'width: 300px' },
        { name: 'status', align: 'left', label: 'Status', field: 'flow_status', sortable: true, style: 'width: 300px' },
        { name: 'actions', align: 'right', label: 'Actions', sortable: false, style: 'width: 300px' }
      ]
    }
  },
  methods: {
    onRowSelected (evt, row) {
      this.$emit('select', row)
    }
  }
}
</script>
