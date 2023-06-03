import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#ff007c',
                secondary: '#10c300',
                accent: '#E0E0E0',
                error: '#b71c1c',
            },
        },
    }
});
