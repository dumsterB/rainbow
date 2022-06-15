<template>
 <div class="contact">
    <h2 class="divider__class">Как заказать услугу</h2>
    <hr class="divider">
    <br>
    <div class="content">
        <v-row class=" d-flex justify-center ">
          <v-timeline class="pa-5 hiddenMobileProcess">
            <v-timeline-item  :color="color" icon="1">
              <v-card  class="cardProcess">
                <p  class="timilineText">Отправляете контакт на сайт</p>
            </v-card>
            </v-timeline-item>
            <v-timeline-item class="text-right " icon="2" :color="color">
              <v-card  class="cardProcess">
              <p  class="timilineText">Наш специалист с вами свяжется и назначит время</p>
              </v-card>
            </v-timeline-item>
            <v-timeline-item :color="color" icon="3" >
              <v-card  class="cardProcess">
                <p class="timilineText" >Мы приедем на обучение пользования аппаратом
</p>
              </v-card>
            </v-timeline-item>
            <v-timeline-item class="text-right " icon="4" :color="color">
              <v-card  class="cardProcess">
                <p class="timilineText">Вы получаете сертификат эксперта
</p>
              </v-card>
            </v-timeline-item>
            <v-timeline-item  :color="color" icon="5">
              <v-card  class="cardProcess">
              <p  class="timilineText" >Мы назначаем частоту и опцию аренды
</p>
              </v-card>
            </v-timeline-item>
            <v-timeline-item class="text-right " icon="6" :color="color">
              <v-card  class="cardProcess">
              <p  class="timilineText">Вы имеете чистый дом и свежий воздух
</p>
              </v-card>
            </v-timeline-item>


          </v-timeline>
        </v-row>

    </div>
    <br>
    <hr class="divider"/>
  </div>
</template>
<style scoped>
.contact{
  margin-bottom: 70px;
}
.divider__class{
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.divider{
  width: 300px;
  height: 2px;
  margin: 0 auto;
  border: none;
  border-radius: 1px;
  background-color: #455560a8;
}
.timilineText{
  text-align: center;
   padding: 55px 40px;
}
 </style>
