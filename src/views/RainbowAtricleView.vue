<template>
  <div class="rainbow__containter">
    <h2 class="rainbow__title">Возможности Rainbow</h2>
      <div class="rainbow__wrap">
        <v-container >
          <v-row>
            <v-col lg="3" md="3" cols="6" sm="6">
              <v-card elevation="0"  class=" rainbow__card" min-width="300" >
                <v-card-text>
                  Чистка игрушек
                </v-card-text>
                <v-card-text>
                  Чистка одежды
                </v-card-text>
                <v-card-text>
                  Чистка и увлажнения цветов
                </v-card-text>
              </v-card>
            </v-col>
            <v-col  lg="3" md="3" cols="6" sm="6">
              <v-card elevation="0" class="  rainbow__card" min-width="300">
                <v-card-text>
                  Влажная уборка
                </v-card-text>
                <v-card-text>
                  Сухая уборка
                </v-card-text>
                <v-card-text>
                  Уборка труднодоступных мест
                </v-card-text>
              </v-card>
            </v-col>
            <v-col  lg="3" md="3" cols="6" sm="6">
              <v-card elevation="0" class=" mx-auto rainbow__card" min-width="300">
                <v-card-text>
                  Глубокая чистка мягкой мебели
                </v-card-text>
                <v-card-text>
                  Поверхностная чистка для мягкой мебели
                </v-card-text>
                <v-card-text>
                  Надувание матрасов и шаров
                </v-card-text>

              </v-card>
            </v-col>
            <v-col  lg="3" md="3" cols="6" sm="6">
              <v-card elevation="0" class=" mx-auto rainbow__card "  min-width="300">
                <v-card-text>
                  Мойка ковров
                </v-card-text>
                <v-card-text>
                  Чистка подушек
                </v-card-text>
                <v-card-text>
                  Ароматерапия
                </v-card-text>


              </v-card>
            </v-col>
          </v-row>
        </v-container>

      </div>
  </div>
</template>

<style scoped lang="css">
.rainbow__card{
 background: linear-gradient(to bottom, #eef2f7 0%, rgba(125, 185, 232, 0) 100%) !important;
}
.rainbow__title{
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
</style>
