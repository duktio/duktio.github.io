<template>
  <q-table
    flat
    :data="flows.items"
    :columns="columns"
    row-key="name"
    @row-click="onRowSelected"
    no-data-label="I didn't find any flows for you"
  >
    <template v-slot:header-cell-actions>
      <q-th auto-width class="text-right">
        <q-btn unelevated stretch size="md" color="black" @click="$emit('create')">CREATE</q-btn>
      </q-th>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
<!--        <q-btn flat icon="delete_outline" color="negative" @click.prevent="$emit('remove', props.row)"></q-btn>-->
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'FlowList',
  components: { },
  props: ['flows'],
  data () {
    return {
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true, style: 'width: 300px' },
        { name: 'summary', align: 'left', label: 'Summary', field: 'summary', sortable: false },
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
