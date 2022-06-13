<template>
  <div class="tatif__container" >
    <h2 class="tarif__title">Наши услуги</h2>
  <v-row justify="center"  >
    <v-expansion-panels focusable >
      <v-expansion-panel
        v-for="(item,i) in items"
        :key="i"
      >
        <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>{{item.description}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

</template>

<script>
export default{
  data(){
    return {
     items:[
      {title:"Регулярная уборка квартир",description:"Мы считаем , что в наше трудное время к Вас есть дела , более важные и интересные , чем уборка своей квартиры , или для того , чтобы навести порядок у себя дома , Вы тратите много сил и времени ."},
      {title:"Уборка после ремонта",description:"Итак , Ваш долгожданный ремонт подошёл к концу . Строители звонят вам и сообщают о том , что их работа закончена и «хозяин(йка)» должны подойти и принять работу."},
      {title:"Генеральная уборка от А до Я",description:"Проведение Генеральной уборки всегда сопровождается долгими , в первую очередь эмоциональными приготовлениями со стороны хозяев."},
      {title:"Уборка домов и коттеджей",description:"Любая хозяйка или хозяин подтвердит , что даже текущая уборка дома является достаточно трудоемким и утомительным процессом , особенно после напряженного рабочего дня ."},
      {title:"Чистка матрасов от клещей",description:"Итак , наступают тёплые дни и хозяйки повально начинают выносить свои ковры и ковровые дорожки для мытья и избавления от пыли .Этот процесс происходит очень затруднительно"},
      {title:"Профессиональная уборка офисов",description:"Хотите , чтобы ваш офис всегда был чистым ? Совершенно нет необходимости раздувать штат и оплачивать работу технического персонала ."},
     ],
    }
  }
}
</script>

<style scoped lang="css">

.tarif__title{
margin-top: 40px;
padding-bottom: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
</style>