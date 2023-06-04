import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    planos: [{
      cod: 1,
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
      cod: 2,
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
      cod: 3,
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
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
