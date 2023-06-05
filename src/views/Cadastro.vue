<template>
    <v-row class="ma-2" justify="center">
        <v-col cols="12">
            <HeaderPlano />
        </v-col>
        <v-col cols="12" md="5" sm="6" order="2" order-sm="1">
            <Formulario :modoFormularo="'cadastro'" />
        </v-col>
        <v-col cols="12" md="4" sm="6" order="1" order-sm="2" class="d-flex justify-center">
            <CardPlanos :exibirBtn="false"
                :planos="this.$store.state.planos.filter(plano => plano.cod == this.$route.params.cod)">
                <div class="dark escolhido white--text rounded-pill mx-auto">
                    PLANO ESCOLHIDO
                </div>
            </CardPlanos>
        </v-col>
    </v-row>
</div></template>
<script>
import CardPlanos from '@/components/CardPlanos.vue';
import Formulario from '@/components/Formulario.vue'
import HeaderPlano from '@/components/HeaderPlano.vue'
export default {
    name: 'Cadastro',
    components: { CardPlanos, Formulario, HeaderPlano }
}

</script>
<style>
.escolhido {
    position: relative;
    max-width: 60%;
    top: -15px;
    margin-bottom: -30px;
}
</style>