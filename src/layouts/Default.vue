<template>
    <div>
        <v-app-bar color="accent">

            <v-img src="@/assets/localweb.png" alt="Logo LocalWeb" max-width="100px" />
            <v-spacer />
            <!-- <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar> -->
            <v-menu bottom rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon x-large v-on="on">
                        <v-avatar color="brown" size="48">
                            <span class="white--text text-h5">{{ usuario[0].toUpperCase() }}</span>
                        </v-avatar>
                    </v-btn>
                </template>

                <div class="mx-auto text-center">
                    <v-btn @click="logout">
                        Sair
                    </v-btn>
                </div>

            </v-menu>

        </v-app-bar>
        <v-main>

            <slot></slot>

        </v-main>
    </div>
</template>
<script>
export default {
    props: ['usuario'],
    name: 'LayoutDefault',
    methods: {
        logout() {
            this.$router.push('/')
        }
    }
}
</script>