<template>
    <LayoutDefault :usuario="usuario">
        <v-container class="d-flex justify-center">
            <v-col cols="12" md="8" sm="10">
                <h1>Olá Wesley,</h1>
                <span class="text-body-1 d-block mb-5">Sejá bem-vindo(a) a sua conta de hospedagem.</span>
                <iframe width="720" height="395" src="https://www.youtube.com/embed/zcXtyKdP92c"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </v-col></v-container>
    </LayoutDefault>
</template>
<script>
import LayoutDefault from '@/layouts/Default.vue'
export default {
    name: 'HomeLogado',
    components: { LayoutDefault },
    data() {
        return {
            usuario: this.$store.state.usuario
        }
    }
}
</script>