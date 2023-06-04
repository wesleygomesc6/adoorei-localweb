<template>
    <v-container fluid class="d-flex justify-center">
        <v-col cols="12" md="10">
            <HeaderPlano />
            <div class="text-center my-4 text-subtitle-1">Escolha seu plano</div>
            <CardPlanos :planos="planos" :exibirBtn="true" />
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
            planos: this.$store.state.planos
        }
    }
}
</script>