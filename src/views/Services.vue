<template>
 <div class="questions">
    <br>
    <h2 class="section__title">Наши услуги</h2>
    <br>
    <div class="content">
      <div>
        <v-container style="width:100%" class="">
          <v-row no-gutters class=" align-center"  align="center">
            <v-col cols="12" sm="6" md="6" lg="6" class="d-flex justify-center">
              <div class="d-block">

                <div class="questions-card ">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1">Регулярная уборка квартир</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background:#00B0FF"
                          @click="show1 = !show1"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show1">
                        <v-divider></v-divider>

                        <v-card-text class="">
                        Мы считаем , что в наше трудное время к Вас есть дела , более важные и интересные , чем уборка своей квартиры , или для того , чтобы навести порядок у себя дома , Вы тратите много сил и времени .
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="420">
                    <v-card-actions>
                      <p class="v-card-title mb-1">Уборка после ремонта</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background:#00B0FF"
                          @click="show2 = !show2"
                      >
                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show2">
                        <v-divider></v-divider>

                        <v-card-text >
                          Итак , Ваш долгожданный ремонт подошёл к концу . Строители звонят вам и сообщают о том , что их работа закончена и «хозяин(йка)» должны подойти и принять работу.
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card ">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >Генеральная уборка от А до Я</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: #00B0FF"
                          @click="show3 = !show3"
                      >
                        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show3">
                        <v-divider></v-divider>

                        <v-card-text >
                          Проведение Генеральной уборки всегда сопровождается долгими , в первую очередь эмоциональными приготовлениями со стороны хозяев.
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col sm="6" md="6" lg="6" class="justify-center d-flex">
              <div class="d-block">

                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="450">
                    <v-card-actions>
                      <p class="v-card-title mb-1">Уборка домов и коттеджей</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: #00B0FF"
                          @click="show7 = !show7"
                      >
                        <v-icon>{{ show7 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show7">
                        <v-divider></v-divider>

                        <p class=" mb-1" >Любая хозяйка или хозяин подтвердит , что даже текущая уборка дома является достаточно трудоемким и утомительным процессом , особенно после напряженного рабочего дня .</p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >Чистка матрасов от клещей</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: #00B0FF"
                          @click="show8 = !show8"
                      >
                        <v-icon>{{ show8 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show8">
                        <v-divider></v-divider>

                        <p class=" mb-1" >Итак , наступают тёплые дни и хозяйки повально начинают выносить свои ковры и ковровые дорожки для мытья и избавления от пыли .Этот процесс происходит очень затруднительно</p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >Профессиональная уборка офисов</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background:#00B0FF"
                          @click="show9 = !show9"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show9">
                        <v-divider></v-divider>

                        <p class=" mb-1" >Хотите , чтобы ваш офис всегда был чистым ? Совершенно нет необходимости раздувать штат и оплачивать работу технического персонала .</p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>

              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data(){
    return{
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      show6:false,
      show7:false,
      show8:false,
      show9:false,
      show10:false,
      show11:false,
      show12:false,
    }
  }
}
</script>

<style scoped>
.section__title{
 margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
 .questions-card{
  background: white;
  width: 550px;
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;
  border: 1px solid lightgray;
}
@media(max-width: 800px){
  .questions-card{
    background: white;
    width: 350px;
    padding: 10px!important;
    margin-top: 10px;
    border-radius: 20px;
    border: 1px solid lightgray;
  }
  .questions .v-card-title{
    font-size: 16px;
    font-weight: 500;
  }
}
.analyticHeader-description{
  color: #00B0FF;
  font-size: 23px;
  font-weight: 500;
  text-align: center;
}
.questions .mdi:before, .mdi-set{
  color: white;
}
</style>