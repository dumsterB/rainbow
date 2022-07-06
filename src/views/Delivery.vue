<template>
<div>
   <div class="contact" data-aos="fade-right">
    <h2 class="services_title"> {{ $t("delivery.title") }} </h2>
    <br >
    <div class="content"  >
      <v-row class="d-flex justify-center">
        <v-timeline  class="pa-5 hiddenMobileProcess" >
          <v-timeline-item class="timeline_item" icon="1">
            <v-card class="cardProcess">
              <p class="timilineText">  {{ $t("delivery.one") }} </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="2">
            <v-card class="cardProcess">
              <p class="timilineText">
                  {{ $t("delivery.two") }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="3">
            <v-card class="cardProcess">
              <p class="timilineText">
                {{ $t("delivery.three") }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="4" >
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.four") }}</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="5">
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.five") }}</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="6">
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.six") }}</p>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-row>
      <v-timeline-item class="text-right" icon="2">
        <v-card class="cardProcess">
          <p class="timilineText">
            Наш специалист с вами свяжется и назначит время
          </p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item icon="3">
        <v-card class="cardProcess">
          <p class="timilineText">
            Мы приедем на обучение пользования аппаратом
          </p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item class="text-right" icon="4">
        <v-card class="cardProcess">
          <p class="timilineText">Вы получаете сертификат эксперта</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item icon="5">
        <v-card class="cardProcess">
          <p class="timilineText">Мы назначаем частоту и опцию аренды</p>
        </v-card>
      </v-timeline-item>
      <v-timeline-item class="text-right"  icon="6">
        <v-card class="cardProcess">
          <p class="timilineText">Вы имеете чистый дом и свежий воздух</p>
        </v-card>
      </v-timeline-item>
    </div>
  </div>



   <div class="contact-mobile" data-aos="fade-left">
    <h2 class="services_title"> {{ $t("delivery.title") }}</h2>
    <br >
    <div class="content-mobile">
      <v-row class="d-flex justify-center pl-2 pr-2">
        <v-timeline dense clipped :reverse="false" class="pa-5 hiddenMobileProcess" >
          <v-timeline-item style="margin-left: -20px" class="text-right" icon="1">
            <v-card class="cardProcess">
              <p class="timilineText">
                {{ $t("delivery.one") }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item style="margin-left: -20px"  class="text-right" icon="2">
            <v-card class="cardProcess">
              <p class="timilineText">
               {{ $t("delivery.two") }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  style="margin-left: -20px" icon="3">
            <v-card class="cardProcess">
              <p class="timilineText">
                 {{ $t("delivery.three") }}
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item style="margin-left: -20px" class="text-right" icon="4" >
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.four") }}</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  style="margin-left: -20px" icon="5">
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.five") }}</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item style="margin-left: -20px" class="text-right" icon="6">
            <v-card class="cardProcess">
              <p class="timilineText"> {{ $t("delivery.six") }}</p>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        </v-row>
    </div>
  </div>
</div>

</template>
<style>
@media(max-width:800px){
  .v-timeline-item__dot {
    margin-left: -30px!important;
  }
  .v-timeline--dense .v-timeline-item__body {
    max-width: calc(100% - 96px)!important;
    margin-left: -20px!important;
  }
}
</style>
<style scoped>
.services_title{
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  color: #455560;
}
.contact {
  margin-bottom: 70px;
}
.timilineText {
  text-align: center;
  padding: 10px 10px;
}
.cardProcess {
  max-width: 800px;
  padding: 10px 10px;
}
.timeline_item {
  width: 700px;
}
.divider__class{

  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;

}
.contact-mobile{
  display: none!important;
}
@media(max-width:800px){

.contact{
  display: none !important;
}
.services_title{
  font-size: 35px;
}
.divider__class{
  font-size: 30px;
   margin-top: 30px;
  margin-bottom: 50px;
  font-weight: 300;
  line-height: 48px;
  text-align: center;
  color: #455560;
}
.contact-mobile{
  display: block !important;
}
.v-timeline-item__dot {
  margin-left: -30px!important;
}
}

</style>

