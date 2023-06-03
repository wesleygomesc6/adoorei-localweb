<template>
  <v-container class="d-flex justify-center">
    <v-col cols="12" md="6" sm="8">
      <div class="container-fluid my-5 d-flex justify-center">

        <v-img src="@/assets/localweb.png" max-width="200px"></v-img>
      </div>
      <v-card class="pa-2">
        <v-card-title class="mb-3">
          <h2>Entre na sua conta</h2>
          <span class="text-body-1">Para acessar a sua conta informe seu e-mail e senha</span>
        </v-card-title>
        <v-card-text>
          <Formulario />
        </v-card-text>
      </v-card>
      <div class="container-fluid my-3 d-flex justify-center">
        <span class="text-body-1">Ainda não tem conta? <a herf="">Cadastre-se</a> </span>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import Formulario from '@/components/Formulario.vue'

export default {
  name: 'Home',
  components: {
    Formulario
  },
  data() {
    return {
      dados: {}
    }
  },
  created() {

  }

}
</script>
