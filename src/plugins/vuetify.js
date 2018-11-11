import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import fr from "vuetify/es5/locale/fr";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#FFCD00"
  },
  lang: {
    locales: {
      fr
    },
    current: "fr"
  }
});
