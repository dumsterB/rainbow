<template>
<div style="position: relative">
  <v-container >
    <h2 class="prices__title">Услуги</h2>
    <v-row style="display: flex; justify-content: center;margin: auto; ">
      <button @click="type = 2" :class="type === 1 ? 'btn-type-active' : 'btn-type'">Одноразовые тарифы</button>
      <button @click="type = 1"  :class="type === 2 ? 'btn-type-active' : 'btn-type'">Регулярные тарифы <br> без инструктора </button>
    </v-row>
  </v-container>
  <div class="background">
    <div class="container">
      <div class="panel pricing-table">

        <div class="panel__one" v-if="type===2">

           <div class="pricing-plan panel__one-pricing">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__one') : $t('prices.titleOne__one') "></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">	(без инструктора, проводится после прохождения тренинга) </li>
            <li class="pricing-features-item">сухая чистка стен, потолков, полов, техники и т.д. (очистка от пыли и грязи)

 </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__one') + ' сум' :  $t('prices__price.priceOne__one') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>

        <div class="pricing-plan panel__one-pricing">
          <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__two') :  $t('prices.titleOne__two') "></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">-(двухспальный), 80.000 сумов (односпальный), 50.000 сумов (детский)

</li>
            <li class="pricing-features-item">(очистка от пыли, гниющей органической массы, пылевых клещей и продуктов их жизнедеятельности и т.д.)
 </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__two') + ' сум' :  $t('prices__price.priceOne__two') + ' сум'"></span>
          <a href="#/" class="pricing-button is-featured">Заказать</a>
        </div>

        <div class="pricing-plan panel__one-pricing">
          <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__three') :  $t('prices.titleOne__three')"></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item"> сухая чистка стен, потолков, полов, техники и т.д. (очистка от пыли и грязи </li>
            <li class="pricing-features-item"> (очистка от пыли, гниющей органической массы, пылевых клещей и продуктов их жизнедеятельности)</li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__three') + ' сум' :  $t('prices__price.priceOne__three') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>

          <div class="pricing-plan panel__one-pricing">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header">	Сухая глубинная чистка ковров и ковровых покрытий – 8.000 сумов/м2</h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">	(очистка от пыли, грязи, волос, гниющей органической массы,</li>
            <li class="pricing-features-item"> пылевых клещей и продуктов их жизнедеятельности, «мертвого» ворса ковров и т.д.) </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__one') + ' сум' :  $t('prices__price.priceOne__one') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>

          <div class="pricing-plan panel__one-pricing">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" >Rainbow на час
</h3>
<br>
         <ul class="pricing-features">

            <li class="pricing-features-item">очистка любых поверхностей в доме от грязи, пыли; очистка и ароматизация воздуха </li>
          </ul>
         <br>
          <span class="pricing-price">150.000 Сум</span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>
        </div>


        <div class="panel__two" v-if="type===1">
         <div class="pricing-plan">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__one') : $t('prices.titleOne__one') "></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">-	Клиенту предоставляется Rainbow в назначенные дни и часы, </li>
            <li class="pricing-features-item">для самостоятельного использования в доме. </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__one') + ' сум' :  $t('prices__price.priceOne__one') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>

        <div class="pricing-plan">
          <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__two') :  $t('prices.titleOne__two') "></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">-	Клиенту предоставляется Rainbow в назначенные дни и часы </li>
            <li class="pricing-features-item">для самостоятельного использования в доме. </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__two') + ' сум' :  $t('prices__price.priceOne__two') + ' сум'"></span>
          <a href="#/" class="pricing-button is-featured">Заказать</a>
        </div>

        <div class="pricing-plan">
          <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html=" type === 1 ? $t('prices.titleTwo__three') :  $t('prices.titleOne__three')"></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">  Клиенту предоставляется Rainbow для самостоятельного использования в доме. </li>
            <li class="pricing-features-item"> подписка на регулярные тарифы возможна при прохождении специализированного тренинга по использованию Rainbow </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__three') + ' сум' :  $t('prices__price.priceOne__three') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "Prices",
  data(){
    return{
      type:1,
    }
  },
}
</script>

<style scoped>
*, *:before, *:after {
  box-sizing: border-box;
}
li{
  list-style: none;
}
.prices__title{
   margin-top: 40px;
  margin-bottom: 60px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.panel__one{
  flex-direction: row;
display: flex;
}
.panel__one-pricing{
width: 100%;
max-width: 220px;
font-size: 8px;
}
.one-child{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}
.panel__two{
  display: flex;
  flex-direction: row;
}
.btn-type{
  width: 300px;
  padding: 20px 0;
  background: #6aaf38;
  font-weight: 700;
  color: white;
  border: 2px solid transparent;
  font-size: 20px;
}
.btn-type-active{
  font-weight: 700;
  border: 2px solid #6aaf38;
  color: black;
  padding: 20px 0;
  font-size: 20px;
  width: 300px;
}

.background {
  padding: 0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: '';
  background: #6aaf38;
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60a9ff', endColorstr='#4394f4',GradientType=0 );
  height: 450px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

@media (min-width: 900px) {
  .background {
    padding: 0 0 25px;
  }
}

.container {
  margin: 0 auto;
  padding: 100px 0 0;
  width: 100%;
}

.panel {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px 25px;
  position: relative;
  width: 100%;
  z-index: 2;
}

.pricing-table {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08), 0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
}

@media (min-width: 900px) {
  .pricing-table {
    flex-direction: row;
  }
}

.pricing-table * {
  text-align: center;
  text-transform: uppercase;
}

.pricing-plan {
  border-bottom: 1px solid #e1f1ff;
  padding: 25px;
}

.pricing-plan:last-child {
  border-bottom: none;
}

@media (min-width: 900px) {
  .pricing-plan {
    border-bottom: none;
    border-right: 1px solid #e1f1ff;
    flex-basis: 100%;
    padding: 25px 50px;
  }

  .pricing-plan:last-child {
    border-right: none;
  }
}

.pricing-img {
  margin-bottom: 25px;
  max-width: 100%;
}

.pricing-header {
  color: #888;
  font-weight: 600;
  letter-spacing: 1px;
}

.pricing-features {
  color:#6aaf38 ;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 20px 0 25px;
}

.pricing-features-item {
  border-top: 1px solid #e1f1ff;
  font-size: 12px;
  line-height: 1.5;
  padding: 15px 0;
}

.pricing-features-item:last-child {
  border-bottom: 1px solid #e1f1ff;
}

.pricing-price {
  color: #6aaf38;
  display: block;
  font-size: 25px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #6aaf38;
  border-radius: 10px;
  color: #6aaf38;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 35px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
}

.pricing-button:hover,
.pricing-button:focus {
  background-color: #e1f1ff;
}

.pricing-button.is-featured {
  background-color: #6aaf38;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #6aaf38 ;
}
</style>