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
          <v-form ref="form" v-model="validLogin" lazy-validation>
            <v-text-field type="text" v-model="usuarioLogin.username" label="Usuário" required outlined clearable
              :rules="validacoes.username"></v-text-field>
            <v-text-field @click:append="show = !show" :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="usuarioLogin.password"
              :rules="validacoes.senhaRules" label="Senha" required outlined clearable counter="6"></v-text-field>

            <div class="container-fluid mb-3 d-flex justify-end"> <span class="text-body-1">Esqueci minha senha</span>
            </div>
            <v-alert v-if="semCadastro" dense text color="error" dismissible>
              Usúario não encontrado! Cadastre-se.
            </v-alert>
            <div class="container-fluid my-1">
              <v-btn :loading="loading" :disabled="!validLogin || !usuarioLogin.username || !usuarioLogin.password"
                color="primary" x-large width="100%" @click="fazerLogin">
                FAZER LOGIN
              </v-btn>
            </div>
            <div class="container-fluid my-1">
              <v-btn color="warning" x-large width="100%" @click="reset">
                LIMPAR
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
      <div class="container-fluid my-3 d-flex justify-center">
        <span class="text-body-1">Ainda não tem conta? <router-link to="planos">Cadastre-se</router-link> </span>
      </div>
    </v-col>
  </v-container>
</template>

<script>
import Formulario from '@/components/Formulario.vue'

export default {
  name: 'Login',
  components: {
    Formulario
  },
  data() {
    return {
      loading: false,
      usuarioLogin: {
        username: "",
        password: ""
      },
      show: false,
      validLogin: true,
      semCadastro: false,
      validacoes: {
        username: [
          v => !!v || "Usuário é obrigatório!",
          v => (v && v.length >= 4) || "O usuário deve conter no mínimo 4 caracteres!"],
        senhaRules: [
          v => !!v || "Senha é obrigatória!",
          v => (v && v.length >= 6) || "A senha deve conter no mínimo 6 caracteres!",
        ]
      },
    }
  },
  methods: {
    fazerLogin() {
      this.loading = true;
      this.$http.post("auth/login", this.usuarioLogin)
        .then(res => {
          if (res.status == 200) {
            localStorage.setItem("username", this.usuarioLogin.username);
            localStorage.setItem("autenticad", true);
            localStorage.setItem("token", res.data.token);
            this.$router.push({ name: 'home' })
            this.loading = false;
          }
        }).catch(() => {
          this.semCadastro = true;
          this.loading = false;
        });
    },
    reset() {
      this.$refs.form.reset();
      this.semCadastro = false;
      this.loading = false;
    },
  }

}
</script>
