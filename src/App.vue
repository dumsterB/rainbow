<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-card class="mx-auto" max-width="300" tile elevation="0">
        <v-list dense>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t("headerDefault.aboutUs") }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t("headerDefault.services") }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t("headerDefault.function") }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ $t("headerDefault.delivery") }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title v-scroll-to="'#sertificate'">
                  {{ $t("headerDefault.sertificate") }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-app-bar elevate-on-scroll app style="background: white !important">
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        style="color: #269aff"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <div class="d-flex">
        <img height="55" src="./assets/logoBlue.png" alt="" />
        <span style="font-weight: 700" class="mt-5 ml-5">Healthy Home</span>
      </div>

      <v-spacer></v-spacer>
      <div class="hidden-md-and-down">
        <v-btn text class="links" v-scroll-to="'#aboutUs'">
          {{ $t("headerDefault.aboutUs") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#services'">
          {{ $t("headerDefault.services") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#delivery'">
          {{ $t("headerDefault.delivery") }}
        </v-btn>
        <v-btn text class="links" v-scroll-to="'#sertificate'">
          {{ $t("headerDefault.sertificate") }}
        </v-btn>
        <v-btn class="primary" depressed v-scroll-to="'#call'">
          <a style="text-decoration: none; color: white">
            {{ $t("headerDefault.call") }}
          </a>
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
        <Carousel></Carousel>
        <Option id="aboutUs"></Option>
        <AboutView></AboutView>
        <RainbowAtricleView id=""></RainbowAtricleView>
        <Prices id="services"></Prices>
        <OrderCall id="call"></OrderCall>
        <Delivery id="delivery"></Delivery>
        <Reviews id="reviews"></Reviews>
        <Certificate id="sertificate"></Certificate>
        <Footer id="footer"></Footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Certificate from "./views/Certificate";
import Carousel from "@/views/Carousel";
import CountryFlag from "vue-country-flag";
import AboutView from "./views/AboutView";
import RainbowAtricleView from "./views/RainbowAtricleView";
import OrderCall from "./views/OrderCall";
import Prices from "./views/Prices";
import Delivery from "./views/Delivery";
import Footer from "./views/Footer";
import Option from "./views/Option.vue";
import Reviews from "./views/Reviews";

export default {
  name: "App",
  components: {
    CountryFlag,
    AboutView,
    RainbowAtricleView,
    OrderCall,
    Prices,
    Delivery,
    Footer,
    Carousel,
    Certificate,
    Option,
    Reviews,
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
  created() {},
};
</script>
<style>
.v-btn {
  text-transform: none;
}
.mobile__list {
  flex-direction: column;
  align-items: center;
}
.links {
  font-size: 17px !important;
}
.v-footer {
  padding: 0px 0px;
}
.wow {
  visibility: hidden;
}
@media (max-width: 800px) {
  * {
    /* overflow: hidden; */
  }
}
</style>
