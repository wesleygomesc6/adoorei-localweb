<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field type="text" v-model="email" :rules="emailRules" label="E-mail" required outlined></v-text-field>
        <v-text-field @click:append="show = !show" :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" v-model="senha" :rules="senhaRules" label="Senha" required
            outlined></v-text-field>

        <div class="container-fluid mb-3 d-flex justify-end"> <span class="text-body-1">Esqueci minha senha</span>
        </div>
        <div class="container-fluid my-1">
            <v-btn :disabled="valid" color="primary" x-large width="100%" @click="validate">
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
  
<script>

export default {
    name: 'Formulario',
    data() {
        return {
            show: false,
            valid: false,
            senha: '',
            senhaRules: [
                v => !!v || 'Senha é obrigatória!',
                v => (v && v.length <= 8) || 'A senha deve conter no mínimo 8 caracteres!',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail é obrigatório!',
                v => /.+@.+\..+/.test(v) || 'Este E-mail inválido!',
            ],

        }
    },
    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
    },


}
</script>