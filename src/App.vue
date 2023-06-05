<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <v-card-text class="pa-0 text-center">&copy; Adoorei LocalWeb {{ new Date().getFullYear() }} </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
