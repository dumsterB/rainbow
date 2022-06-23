<template>
<div>
  <div class="pricing-plan">
          <img src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png" alt="" class="pricing-img">
          <h3 class="pricing-header" v-html="type === 1 ? $t('prices.titleTwo__one') : $t('prices.titleOne__one') "></h3>
          <ul class="pricing-features">
            <li class="pricing-features-item">	Клиенту предоставляется Rainbow в назначенные дни и часы</li>
            <li class="pricing-features-item">для самостоятельного использования в доме. </li>
          </ul>
          <span class="pricing-price" v-html=" type === 1 ? $t('prices__price.priceTwo__one') + ' сум' :  $t('prices__price.priceOne__one') + ' сум' "></span>
          <a href="#/" class="pricing-button">Заказать</a>
        </div>
</div>
</template>
<script>
export default{
  data(){
    return{

    }
  }
}
</script>
<style>

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
  color: #6aaf38;
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
