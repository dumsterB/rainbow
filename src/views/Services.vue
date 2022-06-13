<template>
  <div class="questions">
    <br>
    <h1 class="section__title" v-html="$t('questions.title')"></h1>
    <hr class="divider">
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
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-1')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show1 = !show1"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show1">
                        <v-divider></v-divider>

                        <v-card-text class="" v-html="$t('questions.subtitle-1')">
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="420">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-2')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show2 = !show2"
                      >
                        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show2">
                        <v-divider></v-divider>

                        <v-card-text v-html="$t('questions.subtitle-2')">
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card ">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-3')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show3 = !show3"
                      >
                        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show3">
                        <v-divider></v-divider>

                        <v-card-text v-html="$t('questions.subtitle-3')">
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-7')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show4 = !show4"
                      >
                        <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show4">
                        <v-divider></v-divider>

                        <v-card-text v-html="$t('questions.subtitle-7')">
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-8')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show5 = !show5"
                      >
                        <v-icon>{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show5">
                        <v-divider></v-divider>

                        <v-card-text v-html="$t('questions.subtitle-8')">
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="430">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-9')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show6 = !show6"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show6">
                        <v-divider></v-divider>

                        <v-card-text v-html="$t('questions.subtitle-9')">
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
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-4')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show7 = !show7"
                      >
                        <v-icon>{{ show7 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show7">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-4')"></p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-5')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show8 = !show8"
                      >
                        <v-icon>{{ show8 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show8">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-5')"></p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-6')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show9 = !show9"
                      >
                        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show9">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-6')"></p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-10')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show10 = !show10"
                      >
                        <v-icon>{{ show10 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show10">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-10')"></p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-11')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show11 = !show11"
                      >
                        <v-icon>{{ show11 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show11">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-11')"></p>
                      </div>
                    </v-expand-transition>
                  </div>
                </div>
                <div class="questions-card">
                  <div class="mx-auto"
                       max-width="400">
                    <v-card-actions>
                      <p class="v-card-title mb-1" v-html="$t('questions.card-title-12')"></p>

                      <v-spacer></v-spacer>

                      <v-btn
                          icon
                          small
                          fab
                          style="background: rgb(134, 107, 76)"
                          @click="show12 = !show12"
                      >
                        <v-icon>{{ show12 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                      </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="show12">
                        <v-divider></v-divider>

                        <p class=" mb-1" v-html="$t('questions.subtitle-12')"></p>
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
  color: #4c4e53;
  font-size: 23px;
  font-weight: 500;
  text-align: center;
}
.questions .mdi:before, .mdi-set{
  color: white;
}
</style>