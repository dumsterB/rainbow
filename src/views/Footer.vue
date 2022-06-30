
 <template>
 <div class="contacts__container">
 <v-footer class="footer "
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center "
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <ul class="footer__list">
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
        </ul>

      </v-card-text>

      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>RAINBOW</strong>
      </v-card-text>
    </v-card>
  </v-footer>
 </div>

</template>
<script>

  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-phone',
        'mdi-instagram',
      ],
    }),
  }

</script>

<style scoped>
.content__icon{
  padding-top: 30px 0;
}
a {
  text-decoration: none;
}

li {
  list-style: none;
}
.v-application .indigo.lighten-1 {
  background-color:#4FC3F7  !important;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-right: 0;
  max-width: none;
}
.footer{
  display: flex;
  justify-content: center;
  align-self: center;
}


.footer__link{
  color: white;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.footer__list{
  display: flex;
  justify-content: space-between;
  align-items:center;
  }
  .theme--dark.v-sheet{
    background:#4FC3F7  !important;;
  }
  @media(max-width: 800px){

    .footer__list{
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
    }
   .footer__list li {
    padding-top: 10px;
   }
  }
</style>
