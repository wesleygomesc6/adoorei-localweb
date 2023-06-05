<template>
    <div class="container-fluid d-sm-flex justify-center">
        <template v-for="plano in planos">
            <v-card class="text-center ma-4" width="280px">
                <slot></slot>
                <div class="secondary mais white--text rounded-pill mx-auto"
                    v-if="plano.maisUsado === true && $route.name === 'planos'">
                    MAIS USADO
                </div>
                <v-card-title>
                    <div class="container justify-center font-weight-bold text-h5">{{ plano.nome }}</div>
                </v-card-title>
                <v-card-text class="text--primary">
                    <span class="text-h4 primary--text">{{ plano.preco == 0 ? 'Grátis' : `R$ ${plano.preco},00/mês`
                    }}</span>
                    <v-divider class="my-2" />
                    <span class="text-body-1">{{ plano.recomendacao }}</span>
                    <v-divider class="my-2" />
                    <div class="container" v-if="exibirBtn == true">
                        <v-btn color="primary" x-large width="100%" @click="redirectCadastro(plano.cod)">
                            ESCOLHER ESSE PLANO
                        </v-btn>
                    </div>
                    <div class="text-subtitle-1 font-weight-medium">
                        Seu site em servidores <span class="text-decoration-underline"> no {{ plano.local }}</span>
                    </div>
                    <div class="my-2 text-body-1 container">
                        <template v-for="detalhe in plano.detalhes">
                            <span class="d-block text-start">
                                <v-icon small>mdi-check</v-icon> {{ detalhe }};</span>
                        </template>
                    </div>
                    <div class="text-subtitle-1 font-weight-medium my-2 text-start">
                        {{ plano.suporte }};
                    </div>
                    <div class="text-subtitle-1 font-weight-medium text-start">
                        Aplicativos Disponiveis;
                    </div>
                    <div class="text-body-1 container">
                        <template v-for="aplicativo in plano.aplicativos">
                            <span class="d-block text-start">
                                <v-icon small>mdi-check</v-icon> {{ aplicativo }};</span>
                        </template>
                    </div>
                    <template v-if="plano.migracao != null">
                        <div class="text-subtitle-1 font-weight-medium text-start">
                            Migração Gratuita;
                        </div> <span class="d-block text-start text-body-1">
                            <v-icon small>mdi-check</v-icon> {{ plano.migracao }};</span>
                    </template>
                    <div class="mt-3 text-subtitle-1 font-weight-medium text-start">
                        Você ainda tem
                    </div>
                    <div class="text-body-1 container">
                        <template v-for="extra in plano.extras">
                            <span class="d-block text-start">
                                <v-icon small>mdi-check</v-icon> {{ extra }};</span>
                        </template>
                    </div>
                    <div class="container" v-if="exibirBtn !== true">
                        <v-btn color="primary" outlined text x-large width="100%" @click="redirectPlanos()">
                            TROCAR PLANO
                        </v-btn>
                    </div>

                </v-card-text>
            </v-card>
        </template>
    </div>
</template>
<script>
export default {
    name: 'CardPlanos',
    props: ['planos', 'exibirBtn', 'exibirDetalhes'],
    data() {
        return {

        }
    },
    methods: {
        redirectCadastro(codPlano) {
            this.$router.push(`cadastro/plano/${codPlano}`)
        },
        redirectPlanos() {
            this.$router.push({ name: 'planos' })
        }
    }
}
</script>
<style>
.mais {
    position: relative;
    max-width: 60%;
    top: -15px;
    margin-bottom: -30px;
}
</style>