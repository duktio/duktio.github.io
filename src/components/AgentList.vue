<template>
  <q-table
    flat
    :data="agents.items"
    :columns="columns"
    row-key="name"
    @row-click="onRowSelected"
  >
    <template v-slot:header-cell-actions>
      <q-th auto-width class="text-right">
        <q-btn unelevated stretch size="md" color="black" @click="$emit('create')">CREATE</q-btn>
      </q-th>
    </template>

    <template v-slot:body-cell-created_at="props">
      <q-td>
        {{props.row.created_at | moment("from", "now")}}
      </q-td>
    </template>

<!--    <template v-slot:body-cell-role="props">-->
<!--      <q-td auto-width :props="props">-->
<!--        {{props.row.role.name}}-->
<!--      </q-td>-->
<!--    </template>-->
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
        <q-btn flat icon="visibility" color="primary" @click.native="viewAgent(props.row)"></q-btn>
        <q-btn flat icon="delete_outline" color="negative" @click.native="removeAgent(props.row)"></q-btn>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import AgentDetailDialog from 'components/AgentDetailDialog'

export default {
  name: 'AgentList',
  components: { },
  props: ['agents'],
  data () {
    return {
      columns: [
        { name: 'key', align: 'left', label: 'Key', field: 'public_key', sortable: true },
        { name: 'created_at', align: 'left', label: 'Created', field: 'created_at', sortable: false, style: 'width: 100px' },
        { name: 'last_seen_at', align: 'left', label: 'Last Seen', field: 'last_seen_at', sortable: false, style: 'width: 100px' },
        { name: 'actions', align: 'right', label: 'Actions', sortable: false, style: 'width: 300px' }
      ]
    }
  },
  methods: {
    onRowSelected (evt, row) {
      this.$emit('select', row)
    },
    viewAgent (row) {
      this.$q.dialog({
        component: AgentDetailDialog,
        parent: this,
        agent: row
      })
    },
    removeAgent (row) {
      this.$emit('remove', row)
    }
  }
}
</script>

<style lang="sass" scoped>
.flow-card
  width: 100%
  max-width: 250px
</style>
