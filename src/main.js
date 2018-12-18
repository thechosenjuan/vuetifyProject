// app.js
import '@mdi/font/css/materialdesignicons.css';
import Vue from "vue";
import './plugins/vuetify';
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from 'vuetify';

Vue.config.productionTip = false;
Vue.use(VueI18n);
const messages = {
  en: {
    $vuetify: {
      home: "Home",
      aboutUs: "About us",
      projects: "Projects",
      retail: "Retail",
      hospitality: "Hospitality",
      workspace: "Work Space",
      contact: "Contact"
    }
  },
  es: {
    $vuetify: {
      home: "Inicio",
      aboutUs: "Nosotros",
      projects: "Projectos",
      retail: "Retail",
      hospitality: "Entretenimiento",
      workspace: "Oficinas",
      contact: "Contacto"
    }
  }
};

const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});
Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
