<template>
    <div>
        <template v-if="modoFormulario == 'login'">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field type="text" v-model="usuarioLogin.username" label="Usuário" required outlined></v-text-field>
                <v-text-field @click:append="show = !show" :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="usuarioLogin.password" :rules="senhaRules"
                    label="Senha" required outlined></v-text-field>

                <div class="container-fluid mb-3 d-flex justify-end"> <span class="text-body-1">Esqueci minha senha</span>
                </div>
                <div class="container-fluid my-1">
                    <v-btn :loading="loading" color="primary" x-large width="100%" @click="fazerLogin">
                        FAZER LOGIN
                    </v-btn>
                </div>
                <div class="container-fluid my-1">
                    <v-btn color="warning" x-large width="100%" @click="reset">
                        LIMPAR
                    </v-btn>
                </div>
            </v-form>
        </template>


        <template v-else>

            <h1>Dados Pessoais</h1>
            <span>Informe seus dados pessoais para acesso a sua conta.</span>
            <v-form ref="form" class="mt-5" v-model="valid" lazy-validation>
                <v-text-field type="text" v-model="usuarioCadastro.name.firstname" label="Nome" required
                    outlined></v-text-field>
                <v-text-field type="text" v-model="usuarioCadastro.name.lastName" label="Sobrenome" required
                    outlined></v-text-field>
                <v-text-field type="text" v-model="usuarioCadastro.username" label="Nome de Usuário" required
                    outlined></v-text-field>
                <v-text-field type="email" v-model="usuarioCadastro.email" label="E-mail" required outlined></v-text-field>
                <v-text-field type="tel" v-model="usuarioCadastro.phone" label="Celular" required outlined></v-text-field>
                <v-text-field @click:append="show = !show" :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="usuarioCadastro.password" :rules="senhaRules"
                    label="Senha" required outlined></v-text-field>
                <v-text-field type="password" v-model="usuarioCadastro.password" :rules="senhaRules" label="Confirmar Senha"
                    required outlined></v-text-field>
                <v-divider class="my-3" />
                <h2>Dados do seu site</h2>
                <v-text-field hint="Exatamente igual ao titulo do seu site" type="text" label="Nome do seu site"
                    outlined></v-text-field>
                <v-divider class="mb-2" />
                <v-checkbox v-model="checkbox" :rules="[v => !!v || 'Você precisa concordar com os termos de uso!']"
                    label="Ao concluir com seu cadastro cocê concorda com nossos termos de uso e politica de privacidade"
                    required></v-checkbox>

                <div class="container-fluid my-1">
                    <v-btn :loading="loading" :disabled="valid" color="primary" x-large width="100%" @click="criarConta">
                        CRIAR CONTA
                    </v-btn>
                </div>
                <div class="container-fluid my-1">
                    <v-btn color="warning" x-large width="100%" @click="reset">
                        LIMPAR
                    </v-btn>
                </div>
            </v-form>
        </template>
    </div>
</template>
  
<script>

export default {
    name: 'Formulario',
    props: ['modoFormulario'],
    data() {
        return {
            loading: false,
            checkbox: false,
            usuarioCadastro: {
                email: '',
                username: '',
                phone: '',
                password: '',
                name: {
                    firstname: '',
                    lastname: ''
                },
                address: null
            },
            usuarioLogin: {
                username: '',
                password: ''
            },
            show: false,
            valid: true,
            senhaRules: [
                v => !!v || 'Senha é obrigatória!',
                v => (v && v.length >= 6) || 'A senha deve conter no mínimo 6 caracteres!',
            ],
            emailRules: [
                v => !!v || 'E-mail é obrigatório!',
                v => /.+@.+\..+/.test(v) || 'Este E-mail inválido!',
            ],

        }
    },
    methods: {
        fazerLogin() {
            this.loading = true;
            this.$http.post('https://fakestoreapi.com/auth/login', this.usuarioLogin)
                .then(
                    res => {
                        if (res.status == 200) {
                            this.$store.state.usuario = this.usuarioLogin.username
                            this.$router.push('home')
                        }

                    }
                ).catch(
                    err => {
                        console.log(err)
                        this.$router.push('planos')
                    }
                )
        },
        criarConta() {
            this.loading = true;
            this.$http.post('https://fakestoreapi.com/users', this.usuarioCadastro)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        },
        reset() {
            this.$refs.form.reset()
        },
    },


}
</script>