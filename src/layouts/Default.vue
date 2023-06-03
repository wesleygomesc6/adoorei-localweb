<template>
    <div>
        <v-app-bar color="accent">

            <v-img src="@/assets/localweb.png" alt="Logo LocalWeb" max-width="100px" />
            <v-spacer />
            <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-avatar>

        </v-app-bar>
        <v-main>

            <slot></slot>

        </v-main>
    </div>
</template>
<script>
export default {
    name: 'LayoutDefault'
}
</script>