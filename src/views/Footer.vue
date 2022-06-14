<template>
<div class="footer__container"  style="padding-top: 100px;">
   <v-footer
  >
    <v-card style="background-color:#48aaff  !important ;"
      flat
      tile
      class="indigo white--text text-center"
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

Rainbow®, RainbowMate®, RainMate®, RainJet®, AquaMate®, Rexair®, Hurricane®, Power of Water®, Wet Dust Can"t Fly® и конфигурация очистительной системы Rainbow® являются зарегистрированными торговыми марками компании Rexair, г. Трой, штат Мичиган, США. © 2022 Rexair LLC, все права защищены. *Asthma & Allergy Friendly и логотип Asthma & Allergy Friendly являются сертификационными знаками и торговыми марками организации Allergy Standards Limited. Asthma and Allergy Foundation of America является зарегистрированной торговой маркой организации AAFA.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Rainbow</strong>
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
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),
  }
</script>