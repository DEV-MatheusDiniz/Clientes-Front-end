<template>
  <div id="app" class="container">
    <addCliente />
    <listClientes />
  </div>
</template>


<script>
import ListClientes from '@/components/ListCliente'
import AddCliente from '@/components/AddCliente'

export default {
  name: 'App',
  components: {
    ListClientes,
    AddCliente
  }
}
</script>
