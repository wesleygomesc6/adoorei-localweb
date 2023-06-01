<template>
    <LayoutDefault>
        <div class="main">
            <h1> Olá {{ name }},</h1>
            <span>Seja bem-vindo(a) a sua conta de hospedagem.</span>
            <div class="video">
                <iframe class="videoi" src="https://www.youtube.com/embed/hLceLGZxvOE" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <span>Caso tenha alguma dúvida, <a href="">visite nossa central de ajuda.</a> </span>
        </div>
    </LayoutDefault>
</template>
<script>
import LayoutDefault from '@/components/LayoutDefault.vue'
export default {
    components: { LayoutDefault },
    data() {
        return {
            name: 'Wesley'
        }
    }
}
</script>
<style>
.video {
    padding: 20px 0px;
    min-width: 720px;
}

.videoi {
    width: 100%;
    height: 450px;
}
</style>