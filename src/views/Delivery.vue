<template>
  <div class="contact">
    <h2 class="divider__class">Как заказать услугу</h2>
    <br />
    <div class="content">
      <v-row class="d-flex justify-center">
        <v-timeline class="pa-5 hiddenMobileProcess">
          <v-timeline-item class="timeline_item"  icon="1">
            <v-card class="cardProcess">
              <p class="timilineText">Отправляете контакт на сайт</p>
            </v-card>
<<<<<<< HEAD
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
            <v-timeline-item class="text-right " icon="6" >
              <v-card  class="cardProcess">
              <p  class="timilineText">Вы имеете чистый дом и свежий воздух
</p>
              </v-card>
            </v-timeline-item>


          </v-timeline>
        </v-row>

=======
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
>>>>>>> 187e86400854a5720f3e53728c3a33e31cdc34e6
    </div>
    <div>
      <div class="circle"></div>
    </div>
    <br />
  </div>
</template>
<style scoped>
.contact {
  margin-bottom: 70px;
}
.divider__class {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.divider {
  width: 400px;
  height: 2px;
  margin: 0 auto;
  border: none;
  border-radius: 1px;
  background-color: #455560a8;
}
.timilineText {
  text-align: center;
<<<<<<< HEAD
   padding: 30px 30px;
}
.cardProcess{
  max-width: 800px;
=======
  padding: 20px 20px;
>>>>>>> 187e86400854a5720f3e53728c3a33e31cdc34e6
}
.timeline_item{
  width: 700px;
}
.circle{
  height: 80px;
  width:80px;
  border-radius: 50%;
  background: #016FF9;
  position: absolute;
  top: 10px;
}
.contact{
  position: relative;
}
</style>
