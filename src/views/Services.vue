<template>
      <!-- <ServicesCard/> -->
  <v-card>
    <v-tabs
      color="deep-purple accent-4"
      v-model="tab"
      right
    >
      <v-tab>Одноразовые тарифы</v-tab>
      <v-tab>Регулярные тарифы <br> без инстуктора</v-tab>

      <v-tab-item
        v-for="n in 5"
        :key="n"
         v-model="tab"
      >
        <v-container fluid>
          <v-row>
            <v-col
               v-model="tab"
              v-for="i in 5"
              :key="i"
              cols="12"
              md="4"
            >
             <ServicesCard/>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>

      <v-tab-item
       v-model="tab"
        v-for="n in 3"
        :key="n" >
         <v-container fluid>
        <v-row>
         <v-col
            v-for="i in 3"
              :key="i"
              cols="12"
              md="4">
          <ServicesCard/>
         </v-col>
        </v-row>
         </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import ServicesCard from "./ServicesCard";
export default {
  data(){
    return{
     tab:1,
     
    }
  },
  components:{
    ServicesCard
  }
}
</script>