<template>
    <div>
        <h1>Dados Pessoais</h1>
        <span>Informe seus dados pessoais para acesso a sua conta.</span>
        <v-form ref="form" class="mt-5" v-model="valid" lazy-validation>
            <v-text-field type="text" v-model="usuarioCadastro.name.firstname" label="Nome" required outlined clearable />

            <v-text-field type="text" v-model="usuarioCadastro.name.lastName" label="Sobrenome" required outlined
                clearable />

            <v-text-field type="text" v-model="usuarioCadastro.username" label="Nome de Usuário" required outlined
                clearable />

            <v-text-field type="email" v-model="usuarioCadastro.email" label="E-mail" :rules="validacoes.emailRules"
                required outlined clearable />

            <v-text-field type="tel" v-model="usuarioCadastro.phone" label="Celular" required outlined clearable />

            <v-text-field @click:append="show = !show" :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="usuarioCadastro.password"
                :rules="validacoes.senhaRules" label="Senha" required outlined clearable counter="6" />

            <v-text-field type="password" v-model="confirmPassword" :rules="validacoes.confirmPassword"
                label="Confirmar Senha" required outlined clearable counter="6" />

            <v-divider class="my-3" />

            <h2>Dados do seu site</h2>

            <v-text-field hint="Exatamente igual ao titulo do seu site" type="text" label="Nome do seu site" outlined
                clearable />

            <v-divider class="mb-2" />

            <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Você precisa concordar com os termos de uso!']"
                label="Ao concluir com seu cadastro cocê concorda com nossos termos de uso e politica de privacidade"
                required />

            <v-alert v-if="alertErroCadastro" dense text color="error" dismissible>
                Verifique os dados informados e tente novamente
            </v-alert>
            <v-alert v-if="alertSuccess" dense text color="success" dismissible>
                Cadastro realizado com sucesso! Redicionando para o Login.
            </v-alert>

            <div class="container-fluid my-1">
                <v-btn :loading="loading" :disabled="!valid" color="primary" x-large width="100%" @click="criarConta">
                    CRIAR CONTA
                </v-btn>
            </div>

            <div class="container-fluid my-1">
                <v-btn color="warning" x-large width="100%" @click="reset">
                    LIMPAR
                </v-btn>
            </div>

        </v-form>
    </div>
</template>
  
<script>
export default {
    name: "Formulario",
    data() {
        return {
            loading: false,
            checkbox: false,
            usuarioCadastro: {
                email: "",
                username: "",
                phone: "",
                password: "",
                name: {
                    firstname: "",
                    lastname: ""
                },
            },
            validacoes: {
                username: [
                    v => !!v || "Usuário é obrigatório!",
                    v => (v && v.length >= 4) || "O usuário deve conter no mínimo 4 caracteres!"],
                senhaRules: [
                    v => !!v || "Senha é obrigatória!",
                    v => (v && v.length >= 6) || "A senha deve conter no mínimo 6 caracteres!",
                ],
                emailRules: [
                    v => !!v || "E-mail é obrigatório!",
                    v => /.+@.+\..+/.test(v) || "Este E-mail inválido!",
                ],
                confirmPassword: [
                    v => !!v || "Campo obrigatório",
                    v => v === this.usuarioCadastro.password || "Senhas diferentes"
                ]
            },
            confirmPassword: "",
            show: false,
            valid: true,
            alertErroCadastro: false,
            alertSuccess: false
        };
    },
    methods: {
        criarConta() {
            this.loading = true;
            this.$http.post("/users", this.usuarioCadastro)
                .then(res => {
                    if (res.status === 200) {
                        this.alertSuccess = true;
                        setTimeout(() => {
                            this.$router.push({ name: "login" });
                        }, 3000);
                    }
                    this.loading = false;
                })
                .catch(() => {
                    this.alertErroCadastro = true;
                    this.loading = false;
                });
        },
        reset() {
            this.$refs.form.reset();
            this.loading = false;
        },
    },
}
</script>