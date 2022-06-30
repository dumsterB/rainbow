import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {

                // Color is applied to selected drop down item
                primary: '#4FC3F7',

                // Uncomment this to make things worse
                // 'primary--text': '#FF00FF'
            }
        }
    }
});
