<template>
    <v-container fluid class="d-flex justify-center">
        <v-col cols="12" md="10">
            <HeaderPlano />
            <div class="text-center my-4 text-subtitle-1">Escolha seu plano</div>
            <div class="d-flex justify-center my-5">
                <v-alert dense text color="primary" dismissible>
                    {{ mensagem }}
                </v-alert>
            </div>
            <div class="d-flex justify-center">
                <CardPlanos :planos="planos" :exibirBtn="true" />
            </div>
        </v-col>
    </v-container>
</template>
<script>
import CardPlanos from '@/components/CardPlanos.vue';
import HeaderPlano from '@/components/HeaderPlano.vue'

export default {
    name: 'Planos',
    components: { CardPlanos, HeaderPlano },
    data() {
        return {
            planos: this.$store.state.planos,
            mensagem: 'Você ainda não tem um cadastro. Escolha um plano para continuar.',
            e6: 1,
        }
    }
}
</script>