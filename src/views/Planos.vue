<template>
    <v-container fluid class="d-flex justify-center">
        <v-col cols="12" md="10">
            <div class="d-flex justify-center mb-10">
                <v-img src="@/assets/localweb.png" max-width="200px" alt="Logo localweb" />
            </div>
            <h2 class="text-center">Você está muito próximo de muda a forma de </h2>
            <h2 class="primary--text text-decoration-underline text-center">hospedar seu site </h2>
            <div class="text-center my-4 text-subtitle-1">Escolha seu plano</div>
            <CardPlanos />
        </v-col>
    </v-container>
</template>
<script>
import CardPlanos from '@/components/CardPlanos.vue';

export default {
    name: 'Planos',
    components: { CardPlanos }
}
</script>