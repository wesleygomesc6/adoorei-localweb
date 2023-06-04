<template>
    <v-row class="ma-2" justify="center">
        <v-col cols="12">
            <HeaderPlano />
        </v-col>
        <v-col cols="12" md="6">
            <Formulario :modoFormularo="'cadastro'" />
        </v-col>
        <v-col cols="12" md="4">
            <CardPlanos :exibirBtn="false"
                :planos="this.$store.state.planos.filter(plano => plano.cod == this.$route.params.cod)" />
        </v-col>
    </v-row>
</div></template>
<script>
import CardPlanos from '@/components/CardPlanos.vue';
import Formulario from '@/components/Formulario.vue'
import HeaderPlano from '@/components/HeaderPlano.vue'
export default {
    name: 'Cadastro',
    components: { CardPlanos, Formulario, HeaderPlano },
    data() {
        return {

        }
    },

}

</script>