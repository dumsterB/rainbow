<template>
 <div class="questions">
    <br>
    <h2 class="section__title">  {{ $t("services.title") }}</h2>
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
                      <p class="v-card-title mb-1"> {{ $t("services.servicesTitle__one") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show1 = !show1"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show1">
                        <v-divider></v-divider>

                        <v-card-text class="">
                           {{ $t("services.servicesDescription__one") }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="420">
                    <v-card-actions>
                      <p class="v-card-title mb-1"> {{ $t("services.servicesTitle__two") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show2 = !show2"
                      >
                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show2">
                        <v-divider></v-divider>

                        <v-card-text >
                            {{ $t("services.servicesDescription__two") }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card ">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >{{ $t("services.servicesTitle__three") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show3 = !show3"
                      >
                        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show3">
                        <v-divider></v-divider>

                        <v-card-text >
                           {{ $t("services.servicesDescription__three") }}
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
                      <p class="v-card-title mb-1">{{ $t("services.servicesTitle__four") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show7 = !show7"
                      >
                        <v-icon>{{ show7 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show7">
                        <v-divider></v-divider>

                        <p class=" mb-1" >{{ $t("services.servicesDescription__four") }}</p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >{{ $t("services.servicesTitle__five") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show8 = !show8"
                      >
                        <v-icon>{{ show8 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show8">
                        <v-divider></v-divider>

                        <p class=" mb-1" >{{ $t("services.servicesDescription__five") }}</p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" >{{ $t("services.servicesTitle__six") }}</p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          class="primary"
                          @click="show9 = !show9"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show9">
                        <v-divider></v-divider>

                        <p class=" mb-1" >{{ $t("services.servicesDescription__six") }}</p>
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
.questions .mdi:before, .mdi-set{
  color: white;
}
</style>