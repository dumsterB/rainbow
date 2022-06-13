<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-card class="mx-auto" max-width="300" tile elevation="0">
        <v-list dense>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar app style="background: white" elevation="0">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        style="color: #269aff"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title> Health home </v-toolbar-title>

      <v-spacer></v-spacer>
      <div>
        <v-btn text class="links" v-scroll-to="'#aboutUs'">
          {{ $t("headerDefault.aboutUs") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#services'">
          {{ $t("headerDefault.services") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#function'">
          {{ $t("headerDefault.function") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#delivery'">
          {{ $t("headerDefault.delivery") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="">
          {{ $t("headerDefault.quality") }}
        </v-btn>
        <v-btn class="primary" depressed v-scroll-to="'#order_call'">
          <a style="text-decoration: none; color: white" href="">
           {{ $t("headerDefault.call") }}
           </a
          >
        </v-btn>
      </div>

      <div class="ml-2">
        <v-btn
          v-if="currentLanguage === 'ru'"
          @click="changeLanguage('uz')"
          dark
          style="background: transparent"
          elevation="0"
        >
          <country-flag style="margin-top: -4px" country="rus" size="normal" />
        </v-btn>
        <v-btn
          v-if="currentLanguage === 'uz'"
          @click="changeLanguage('ru')"
          dark
          style="background: transparent"
          elevation="0"
        >
          <country-flag style="margin-top: -4px" country="uz" size="normal" />
        </v-btn>
      </div>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <div>
        <AboutView id="aboutUs"></AboutView>
        <RainbowAtricleView></RainbowAtricleView>
        <OrderCall id="order_call"></OrderCall>
        <KertificateView></KertificateView>
        <Services></Services>
        <Tatif></Tatif>
        <Prices></Prices>
      </div>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import CountryFlag from "vue-country-flag";
import AboutView from "./views/AboutView";
import RainbowAtricleView from "./views/RainbowAtricleView";
import OrderCall from "./views/OrderCall";
import Services from "@/views/Services";
import Tatif from "./views/Tatif.vue";
import Prices from './views/Prices'

export default {
  name: "App",
  components: {
    CountryFlag,
    AboutView,
    RainbowAtricleView,
    OrderCall,
    Services,
    Tatif,
    Prices,
},

  data() {
    return {
      selectedItem: 1,
      drawer: false,
      currentLanguage: "ru",
      languages: [
        { val: "ru", text: "Русский-язык" },
        { val: "uz", text: "Uzbek-tili" },
      ],
    };
  },
  methods: {
    changeLanguage(val) {
      this.$i18n.locale = val;
      this.currentLanguage = val;
      console.log(val);
    },
    changeDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style>
.links {
  font-size: 17px !important;
}
</style>
