<template>
    <div class="container-fluid d-block d-sm-flex justify-center">
        <template v-for="plano in planos">
            <v-card class="ma-2 text-center" width="280px">

                <v-card-title>
                    <div class="container justify-center font-weight-bold text-h5">{{ plano.nome }}</div>
                </v-card-title>
                <v-card-text class="text--primary">
                    <span class="text-h4 primary--text">{{ plano.preco == 0 ? 'Grátis' : `R$ ${plano.preco},00/mês`
                    }}</span>
                    <v-divider class="my-2" />
                    <span class="text-body-1">{{ plano.recomendacao }}</span>
                    <v-divider class="my-2" />
                    <div class="container">
                        <v-btn color="primary" x-large width="100%">
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
                </v-card-text>
            </v-card></template>
    </div>
</template>
<script>
export default {
    name: 'CardPlanos',
    data() {
        return {
            planos: [
                {
                    nome: 'Hospedagem 1',
                    preco: 0,
                    info: 'Você não paga nada para usar',
                    taxa: 'Sem taxa de setup',
                    recomendacao: 'Ideal para quem está começando',
                    local: 'Estados Unidos',
                    detalhes: [
                        'Servidores em nossos data centers americanos',
                        'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.4/4.5.1/4.5.2 (medium trust) ou PHP 5.3/5.4/5.5/5.6 e 7.0',
                        '1 usuario de FTP para dowloand ou upload',
                        '1 conta de e-mail profissionais',
                        '1 subdominio gratuito'
                    ],
                    suporte: 'Suporte 24 horas, 7 dias por semana gratis',
                    aplicativos: ['WordPress', 'Drupal', 'Entre outros...'],
                    migracao: null,
                    extras: [
                        'Webmail RoundCube',
                        'AntiSpan',
                        'Painel de gerenciamento DNS',
                        'Painel de controle Web',
                        'Configurações de PHP personalizaveis',
                        'Certificado SSL grátis',
                        'Transferencia ilimitada'
                    ],
                    maisUsado: false
                },
                {
                    nome: 'Hospedagem 2',
                    preco: 499,
                    info: 'Cobrado mensalmente',
                    taxa: 'Sem taxa de setup',
                    recomendacao: 'Ideal para sites com mais de 30k de visitas',
                    local: 'Brasil',
                    detalhes: [
                        'Servidores em nossos data centers de São Paulo',
                        'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.4/4.5.1/4.5.2 (medium trust) ou PHP 5.3/5.4/5.5/5.6 e 7.0',
                        '10 usuario de FTP para dowloand ou upload',
                        '30 conta de e-mail profissionais',
                        '10 subdominio gratuito'
                    ],
                    suporte: 'Suporte 24 horas, 7 dias por semana gratis',
                    aplicativos: ['WordPress', 'Drupal', 'Entre outros...'],
                    migracao: 'Migramos todos os seus sites para os nossos servidores',
                    extras: [
                        'Webmail RoundCube',
                        'AntiSpan',
                        'Painel de gerenciamento DNS',
                        'Painel de controle Web',
                        'Configurações de PHP personalizaveis',
                        'Certificado SSL grátis',
                        'Transferencia ilimitada'
                    ],
                    maisUsado: true
                },
                {
                    nome: 'Hospedagem 3',
                    preco: 999,
                    info: 'Cobrado mensalmente',
                    taxa: 'Sem taxa de setup',
                    recomendacao: 'Ideal para sites com mais de 60k de visitas',
                    local: 'Brasil',
                    detalhes: [
                        'Servidores em nossos data centers de São Paulo',
                        'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.4/4.5.1/4.5.2 (medium trust) ou PHP 5.3/5.4/5.5/5.6 e 7.0',
                        'ilimitados usuario de FTP para dowloand ou upload',
                        'ilimitados conta de e-mail profissionais',
                        '50 subdominio gratuito'
                    ],
                    suporte: 'Suporte 24 horas, 7 dias por semana gratis',
                    aplicativos: ['WordPress', 'Drupal', 'Entre outros...'],
                    migracao: 'Migramos todos os seus sites para os nossos servidores',
                    extras: [
                        'Webmail RoundCube',
                        'AntiSpan',
                        'Painel de gerenciamento DNS',
                        'Painel de controle Web',
                        'Configurações de PHP personalizaveis',
                        'Certificado SSL grátis',
                        'Transferencia ilimitada'
                    ],
                    maisUsado: false
                }
            ]
        }
    }
}
</script>