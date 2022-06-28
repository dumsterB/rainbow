<template>
<div>
   <div class="contact">
    <h2 class="divider__class">Как заказать услугу</h2>
    <br >
    <div class="content">
      <v-row class="d-flex justify-center">
        <v-timeline  class="pa-5 hiddenMobileProcess">
          <v-timeline-item class="timeline_item" icon="1">
            <v-card class="cardProcess">
              <p class="timilineText">Отправляете контакт на сайт </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="2">
            <v-card class="cardProcess">
              <p class="timilineText">
                Наш специалист с вами свяжется и назначит время
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="3">
            <v-card class="cardProcess">
              <p class="timilineText">
                Мы приедем на обучение пользования аппаратом
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="4" >
            <v-card class="cardProcess">
              <p class="timilineText">Вы получаете сертификат эксперта</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="5">
            <v-card class="cardProcess">
              <p class="timilineText">Мы назначаем частоту и опцию аренды</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="6">
            <v-card class="cardProcess">
              <p class="timilineText">Вы имеете чистый дом и свежий воздух</p>
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
   <div class="contact-mobile">
    <h2 class="divider__class">Как заказать услугу</h2>
    <br >
    <div class="content-mobile">
      <v-row class="d-flex justify-center">
        <v-timeline dense clipped :reverse="false" class="pa-5 hiddenMobileProcess" >
          <v-timeline-item class="text-right" icon="1">
            <v-card class="cardProcess">
              <p class="timilineText">
                Наш специалист с вами свяжется и назначит время
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="2">
            <v-card class="cardProcess">
              <p class="timilineText">
                Наш специалист с вами свяжется и назначит время
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="3">
            <v-card class="cardProcess">
              <p class="timilineText">
                Мы приедем на обучение пользования аппаратом
              </p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="4" >
            <v-card class="cardProcess">
              <p class="timilineText">Вы получаете сертификат эксперта</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item  icon="5">
            <v-card class="cardProcess">
              <p class="timilineText">Мы назначаем частоту и опцию аренды</p>
            </v-card>
          </v-timeline-item>
          <v-timeline-item class="text-right" icon="6">
            <v-card class="cardProcess">
              <p class="timilineText">Вы имеете чистый дом и свежий воздух</p>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        </v-row>
    </div>
  </div>
</div>

</template>
<style scoped>
.contact {
  margin-bottom: 70px;
}
.timilineText {
  text-align: center;
  padding: 10px 10px;
}
.cardProcess {
  max-width: 800px;
  padding: 20px 20px;
}
.timeline_item {
  width: 700px;
}

.content-mobile{
  display: none!important;
}
@media(max-width:800px){
.contact{
  display: none !important;
}
.contact-mobile{
  display: block !important;
}
.v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item:nth-child(2n+1):not(.v-timeline-item--before), .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse) .v-timeline-item--after {
  flex-direction: row;
}
}
</style>
