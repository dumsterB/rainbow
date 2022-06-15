<template>
  <div class="rainbow__containter">
    <h2 class="rainbow__title">{{ $t("possibility.title") }}</h2>
    <div class="rainbow__wrap">
      <v-container>
        <v-row>
          <v-col lg="3" md="3" cols="6" sm="6">
            <v-card elevation="0" class=" rainbow__card" min-width="280">
              <v-card-text class="card__text">
               {{ $t("possibility.pillarOne__one") }}
              </v-card-text>
              <v-card-text class="card__text">
              {{ $t("possibility.pillarOne__two") }}
              </v-card-text>
              <v-card-text class="card__text">
               {{ $t("possibility.pillarOne__three") }}
              </v-card-text>
               <v-card-text class="card__text">
                дезинфекция
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="3" md="3" cols="6" sm="6">
            <v-card elevation="0" class="rainbow__card" min-width="280">
              <v-card-text class="card__text">
                {{ $t("possibility.pillarTwo__one") }}
              </v-card-text>
              <v-card-text class="card__text">
               {{ $t("possibility.pillarTwo__two") }}
              </v-card-text>
              <v-card-text class="card__text">
                {{ $t("possibility.pillarTwo__three") }}
              </v-card-text>
              <v-card-text class="card__text">
                ароматизации
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="3" md="3" cols="6" sm="6">
            <v-card elevation="0" class=" mx-auto rainbow__card" min-width="280">
              <v-card-text class="card__text">
              {{ $t("possibility.pillarThree__one") }}
              </v-card-text>
              <v-card-text class="card__text">
                 {{ $t("possibility.pillarThree__two") }}
              </v-card-text>
              <v-card-text class="card__text">
               {{ $t("possibility.pillarThree__three") }}
              </v-card-text>
               <v-card-text class="card__text">
               ионизации воздуха
              </v-card-text>

            </v-card>
          </v-col>
          <v-col lg="3" md="3" cols="6" sm="6">
            <v-card elevation="0" class=" mx-auto rainbow__card " min-width="280">
              <v-card-text class="card__text">
               {{ $t("possibility.pillarFour__one") }}
              </v-card-text>
              <v-card-text class="card__text">
               {{ $t("possibility.pillarFour__two") }}
              </v-card-text>
              <v-card-text class="card__text">
                {{ $t("possibility.pillarFour__three") }}
              </v-card-text>

              <v-card-text class="card__text">
             сухой глубинной чистки мягких поверхностей
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </div>
  </div>
</template>

<style scoped lang="css">

.rainbow__card {
  background: linear-gradient(to bottom, #eef2f7 0%, rgba(125, 185, 232, 0) 100%) !important;
  padding: 55px 30px;
  margin-right: 13px;
  padding-bottom: 50px;
}

.rainbow__title {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}

.card__text {
  list-style-type: none;
  padding: 0 0 0 35px;
  margin: 0 0 20px 0;
  position: relative;
  font-size: 20px;
}

.card__text::before {
  content: "";
  width: 20px;
  height: 20px;
  background: url("../assets/ico-check.svg") no-repeat center center;
  background-size: auto;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
