<template>
  <q-table
    flat
    :data="namespaces.items"
    :columns="columns"
    row-key="name"
    @row-click="onRowSelected"
  >
    <template v-slot:header-cell-actions>
      <q-th auto-width class="text-right">
        <q-btn unelevated stretch size="md" color="black" @click="$emit('create')">CREATE</q-btn>
      </q-th>
    </template>
    <template v-slot:body-cell-role="props">
      <q-td auto-width :props="props">
        {{props.row.role.name}}
      </q-td>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
<!--        <q-btn flat icon="delete_outline" color="negative" @click.native="removeNamespace(props)"></q-btn>-->
      </q-td>
    </template>
  </q-table>
</template>

<script>
import NamespaceCreateDialog from 'components/NamespaceCreateDialog'
export default {
  name: 'NamespaceList',
  components: { },
  props: ['namespaces'],
  data () {
    return {
      columns: [
        { name: 'role', align: 'left', label: 'Role', sortable: false, style: 'width: 100px' },
        { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true, style: 'width: 300px' },
        { name: 'summary', align: 'left', label: 'Summary', field: 'summary', sortable: false },
        { name: 'version', align: 'left', label: 'Version', field: 'version', sortable: false, style: 'width: 100px' },
        { name: 'members', align: 'left', label: 'Members', field: 'members', sortable: false, style: 'width: 100px' },
        { name: 'actions', align: 'right', label: 'Actions', sortable: false, style: 'width: 300px' }
      ]
    }
  },
  methods: {
    onRowSelected (evt, row) {
      this.$emit('select', row)
    },
    createNamespace () {
      this.$q.dialog({
        component: NamespaceCreateDialog,
        parent: this
      }).onOk((result) => {
        this.$router.push(`/me/namespaces/${result._key}`)
      })
    },
    removeNamespace (namespace) {
      const ns = namespace
      this.$q.dialog({
        title: 'Confirm',
        message: `Are you sure you want to remove the ${ns.name} namespace?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('namespaces/remove', ns._key).then(() => {
          this.$q.notify({
            type: 'positive',
            message: `Removed the ${ns.name} namespace.`
          })
        })
      })

      return false
    }
  }
}
</script>

<style lang="sass" scoped>
.flow-card
  width: 100%
  max-width: 250px
</style>
