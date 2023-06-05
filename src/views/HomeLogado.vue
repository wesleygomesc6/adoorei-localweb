<template>
    <LayoutDefault :usuario="usuario">
        <v-container class="d-flex justify-center">
            <v-col cols="12" md="10">
                <h1>Olá Wesley,</h1>
                <span class="text-body-1 d-block mb-5">Sejá bem-vindo(a) a sua conta de hospedagem.</span>
                <iframe class="video" src="https://www.youtube.com/embed/zcXtyKdP92c" title="YouTube video player"
                    frameborder="0"
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
            usuario: localStorage.getItem('username')
        }
    }
}
</script>
<style>
.video {
    width: 100%;
    height: 500px;
}

@media (max-width : 600px) {
    .video {
        height: 100%;
    }

}
</style>