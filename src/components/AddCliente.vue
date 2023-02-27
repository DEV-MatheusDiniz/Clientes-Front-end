<template>

    <form class="input-group pt-5 pb-3">

        <span class="input-group-text">Novo cliente</span>

        <input type="text" v-model="cliente.nome" class="form-control" name="nome" placeholder="Nome">
        <input type="number" v-model="cliente.idade" class="form-control" name="idade" placeholder="Idade">
        <input type="text" v-model="cliente.endereco" class="form-control" name="endereco" placeholder="Endereço">

        <button v-on:click="addCliente(cliente)" class="btn btn-success">Salvar</button>

    </form>

</template>


<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'addCliente',

    computed: {
        ...mapState([ 'cliente' ])
    },

    methods: {
        ...mapActions([ 'addCliente' ])
    }
}
</script>
