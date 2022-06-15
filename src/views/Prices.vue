<template>
<div style="position: relative">
  <v-container >
    <v-row style="display: flex; justify-content: center;margin: auto; ">
      <button @click="type = 2" :class="type === 1 ? 'btn-type-active' : 'btn-type'">Одноразовые тарифы</button>
      <button @click="type = 1"  :class="type === 2 ? 'btn-type-active' : 'btn-type'">Регулярные тарифы <br> без инструктора </button>
    </v-row>
  </v-container>
  <div class="background">
    <div class="container">
      <div class="panel pricing-table">
        <div class="pricing-plan">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header">8 часов без инструктора</h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">Custom domains</li>
            <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
          </ul>
          <span class="pricing-price">300 000 сум</span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>

        <div class="pricing-plan">
          <img src="https://s28.postimg.cc/ju5bnc3x9/plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header">Чистка матраса от пыльевых клещей</h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">Never sleeps</li>
            <li class="pricing-features-item">Multiple workers for more powerful apps</li>
          </ul>
          <span class="pricing-price">150.000 сум</span>
          <a href="#/" class="pricing-button is-featured">Заказать</a>
        </div>

        <div class="pricing-plan">
          <img src="https://s21.postimg.cc/tpm0cge4n/space-ship.png" alt="" class="pricing-img">
          <h3 class="pricing-header">4 часа с инструктором</h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">Dedicated</li>
            <li class="pricing-features-item">Simple horizontal scalability</li>
          </ul>
          <span class="pricing-price">300 000  сум</span>
          <a href="#/" class="pricing-button">Заказать</a>
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
.btn-type{
  width: 300px;
  padding: 20px 0;
  background: #4394f4;
  font-weight: 700;
  color: white;
  border: 2px solid transparent;
  font-size: 20px;
}
.btn-type-active{
  font-weight: 700;
  border: 2px solid #4394f4;
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
  background: #60a9ff;
  background: -moz-linear-gradient(top, #60a9ff 0%, #4394f4 100%);
  background: -webkit-linear-gradient(top, #60a9ff 0%,#4394f4 100%);
  background: linear-gradient(to bottom, #60a9ff 0%,#4394f4 100%);
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
  z-index: 10;
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
  color: #016FF9;
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
  color: #016FF9;
  display: block;
  font-size: 25px;
  font-weight: 700;
}

.pricing-button {
  border: 1px solid #9dd1ff;
  border-radius: 10px;
  color: #348EFE;
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
  background-color: #48aaff;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color: #269aff;
}
</style>