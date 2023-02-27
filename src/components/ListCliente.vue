<template>
    <table class="table table-dark table-striped">

        <thead>

            <tr>

                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Idade</th>
                <th scope="col">Endereço</th>
                <th scope="col">Ações</th>

            </tr>

        </thead>

        <tbody>

            <tr v-for="cliente in clientes" :key="cliente.id" :cliente="cliente">

                <td>{{ cliente.id }}</td>
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.idade }}</td>
                <td>{{ cliente.endereco }}</td>
                <td>
                    <button class="btn btn-danger" v-on:click="deleteCliente(cliente.id)">Deletar</button>
                </td>

            </tr>

        </tbody>

    </table>
</template>


<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'ListCliente',

    mounted() {
        this.getClientes()
    },

    computed: {
        ...mapState([ 'clientes' ])
    },

    methods: {
        ...mapActions([ 'getClientes', 'deleteCliente' ])
    }
}
</script>
