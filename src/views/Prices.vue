<template>
<div   data-aos="fade-right">
 <div style="position: relative" class="wrap__price " >
    <v-container>
      <h2 class="prices__title"> {{ $t("prices.title") }}</h2>
      <v-row style="display: flex; justify-content: center; margin: auto">
        <button
          @click="type = 2"
          :class="type === 1 ? 'btn-type-active' : 'btn-type'"
        >
        {{ $t("prices.TitleOne") }}
        </button>
        <button
          @click="type = 1"
          :class="type === 2 ? 'btn-type-active' : 'btn-type'"
        >
          {{ $t("prices.TitleTwo__one") }} <br />
           {{ $t("prices.TitleTwo__two") }}
        </button>
      </v-row>
    </v-container>
    <div class="background " >
      <div class="container-fluid" v-if="type === 2">
        <div class="panel pricing-table" >
          <div class="panel__one ">
            <div class="pricing-plan panel__one-pricing">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__one')
                    : $t('prices.titleOne__one')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                  {{ $t('prices.titleDesc__one-one') }}
                </li>
                <li class="pricing-features-item">
                   {{ $t('prices.titleDesc__two-one') }}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing">
              <img
                src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__two')
                    : $t('prices.titleOne__two')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                {{ $t('prices.titleDesc__one-two')}}

                </li>
                <li class="pricing-features-item">
                   {{ $t('prices.titleDesc__two-two')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__two') + ' сум'
                    : $t('prices__price.priceOne__two') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button is-featured">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__three')
                    : $t('prices.titleOne__three')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                  {{$t('prices.titleDesc__one-three')}}
                </li>
                <li class="pricing-features-item">
                 {{$t('prices.titleDesc__two-three')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__three') + ' сум'
                    : $t('prices__price.priceOne__three') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing">
              <img
                  src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3 class="pricing-header">
                {{ $t('prices.titleOne__four')}}
              </h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{$t('prices.titleDesc__one-four')}}
                </li>
                <li class="pricing-features-item">
                   {{$t('prices.titleDesc__two-four')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3 class="pricing-header"> {{ $t('prices.titleOne__five')}}</h3>
              <br />
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{ $t('prices.titleDesc__one-five')}}
                </li>
              </ul>
              <br />
              <span class="pricing-price">150.000 Сум</span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

          </div>
        </div>
      </div>
      <div class="container" v-if="type === 1">
        <div class="panel pricing-table">
          <div class="panel__two">
            <div class="pricing-plan">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__one')
                    : $t('prices.titleOne__one')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">

                  {{ $t('prices.titleDesc__free-one')}}
                </li>
                <li class="pricing-features-item">
                 {{ $t('prices.titleDesc__freTwo-one')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan">
              <img
                src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__two')
                    : $t('prices.titleOne__two')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                  {{ $t('prices.titleDesc__free-two')}}
                </li>
                <li class="pricing-features-item">
                  {{ $t('prices.titleDesc__freTwo-two ')}}

                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__two') + ' сум'
                    : $t('prices__price.priceOne__two') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button is-featured">Заказать</a>
            </div>

            <div class="pricing-plan">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__three')
                    : $t('prices.titleOne__three')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                   {{ $t('prices.titleDesc__free-three')}}
                </li>
                <li class="pricing-features-item">
                   {{ $t('prices. titleDesc__freTwo-three')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__three') + ' сум'
                    : $t('prices__price.priceOne__three') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    <div style="position: relative" class="wrap__price-mobile">
    <v-container>
      <h2 class="prices__title">{{ $t("prices.title") }}</h2>
      <v-row class="prices__row" >
        <button
          @click="type = 2"
          :class="type === 1 ? 'btn-type-active' : 'btn-type'"

        >
          {{ $t("prices.TitleOne") }}
        </button>
        <button
          @click="type = 1"
          :class="type === 2 ? 'btn-type-active' : 'btn-type'"

        >
             {{ $t("prices.TitleTwo__one") }} <br />
           {{ $t("prices.TitleTwo__two") }}
        </button>
      </v-row>
    </v-container>
    <div class="background">
      <div class="container-fluid" v-if="type === 2">
        <div class="panel pricing-table">
          <div class="panel__one">

            <div class="pricing-plan panel__one-pricing mt-2" cols="12">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__one')
                    : $t('prices.titleOne__one')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                  {{ $t('prices.titleDesc__one-one')}}
                </li>
                <li class="pricing-features-item">
                   {{ $t('prices.titleDesc__two-one')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing"  cols="12">
              <img
                src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__two')
                    : $t('prices.titleOne__two')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{ $t('prices.titleDesc__one-two')}}
                </li>
                <li class="pricing-features-item">
                  {{ $t('prices.titleDesc__two-two')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__two') + ' сум'
                    : $t('prices__price.priceOne__two') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing" cols="12">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__three')
                    : $t('prices.titleOne__three')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{$t('prices.titleDesc__one-three')}}
                </li>
                <li class="pricing-features-item">
                   {{$t('prices.titleDesc__two-three')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__three') + ' сум'
                    : $t('prices__price.priceOne__three') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing"  cols="12">
              <img
                  src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3 class="pricing-header">
              {{ $t('prices.titleOne__four')}}
              </h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{$t('prices.titleDesc__one-four')}}
                </li>
                <li class="pricing-features-item">
                  {{$t('prices.titleDesc__two-four')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan panel__one-pricing" cols="12">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3 class="pricing-header"> {{ $t('prices.titleOne__five')}}</h3>
              <br />
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{$t('prices.titleDesc__one-five')}}
                </li>
              </ul>
              <br />
              <span class="pricing-price">150.000 Сум</span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

          </div>
        </div>
      </div>
      <div class="container" v-if="type === 1">
        <div class="panel pricing-table">
          <div class="panel__two">
            <div class="pricing-plan">
              <img
                src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__one')
                    : $t('prices.titleOne__one')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
{{ $t('prices.titleDesc__free-one')}}
                </li>
                <li class="pricing-features-item">
   {{ $t('prices.titleDesc__freTwo-one')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__one') + ' сум'
                    : $t('prices__price.priceOne__one') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>

            <div class="pricing-plan"  cols="12">
              <img
                src="https://s28.postimg.cc/ju5bnc3x9/plane.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__two')
                    : $t('prices.titleOne__two')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                 {{ $t('prices.titleDesc__free-two')}}
                </li>
                <li class="pricing-features-item">
                    {{ $t('prices.titleDesc__freTwo-two')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__two') + ' сум'
                    : $t('prices__price.priceOne__two') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button is-featured">Заказать</a>
            </div>

            <div class="pricing-plan" cols="12">
              <img
                src="https://s21.postimg.cc/tpm0cge4n/space-ship.png"
                alt=""
                class="pricing-img"
              />
              <h3
                class="pricing-header"
                v-html="
                  type === 1
                    ? $t('prices.titleTwo__three')
                    : $t('prices.titleOne__three')
                "
              ></h3>
              <ul class="pricing-features">
                <li class="pricing-features-item">
                {{ $t('prices.titleDesc__free-three')}}
                </li>
                <li class="pricing-features-item">
                   {{ $t('prices.titleDesc__freTwo-three')}}
                </li>
              </ul>
              <span
                class="pricing-price"
                v-html="
                  type === 1
                    ? $t('prices__price.priceTwo__three') + ' сум'
                    : $t('prices__price.priceOne__three') + ' сум'
                "
              ></span>
              <a href="#/" class="pricing-button">Заказать</a>
            </div>
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
  data() {
    return {
      type: 2,
    };
  },
};
</script>

<style scoped>
.pricing-table
*,
*:before,
*:after {
  box-sizing: border-box;
}
li {
  list-style: none;
}
.wrap__price{
  display: none !important;
}
.container-fluid{
padding-top: 100px;
}
.prices__title {
  margin-top: 40px;
  margin-bottom: 60px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.prices__row{
   margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.panel__one {
 display: flex;
   display: column;

}
.panel__one-pricing {
  width: 100%;
  font-size: 12px;

  display: flex;
  flex-direction: column;
}

.panel__two {
  display: flex;
  flex-direction: row;
}
.btn-type {
  width: 300px;
  padding: 25px 0;
  background: #4FC3F7 ;
  font-weight: 700;
  color: white;
  border: 2px solid transparent;
  font-size: 20px;
  height: 100px;

}
.btn-type-active {
  font-weight: 700;
  border: 3px solid#4FC3F7 ;
  color: black;
  font-size: 20px;
  padding: 25px 0;

  width: 300px;
  height: 100px;
}

.background {
  padding:  0 25px 25px;
  position: relative;
  width: 100%;
}

.background::after {
  content: "";
  background:#4FC3F7 ;
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
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.08),
    0px 20px 31px 3px rgba(0, 0, 0, 0.09), 0px 8px 20px 7px rgba(0, 0, 0, 0.02);
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
    padding: 10px 10px;
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
  color: #4FC3F7 ;
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
  color:#4FC3F7 ;
  display: block;
  font-size: 25px;
  font-weight: 700;
  margin-top: auto;
}

.pricing-button {
  border: 1px solid#4FC3F7 ;
  border-radius: 10px;
  color: #4FC3F7 ;
  display: inline-block;
  margin: 25px 0;
  padding: 15px 30px;
  text-decoration: none;
  transition: all 150ms ease-in-out;
  /* margin-bottom: auto; */
}
.pricing-button.is-featured{
  font-size: 14px;
  font-weight: 700;
}
.pricing-button:hover,
.pricing-button:focus {
  background-color:#4FC3F7  ;
}

.pricing-button.is-featured {
  background-color:#4FC3F7 ;
  color: #fff;
}

.pricing-button.is-featured:hover,
.pricing-button.is-featured:active {
  background-color:#4FC3F7 ;
}
.container-fluid{
  padding-right: 30px;
  padding-left: 30px;
}
@media(max-width:800px){
  .wrap__price{
  display: none !important;
}
.prices__title{
  font-size: 40px;
}
.wrap__price-mobile{
  display:block !important;
}
.panel__one{
  display: flex;
  flex-direction: column;
}
.panel__two{
  display: flex;
  flex-direction: column;

}
.prices__row{
  margin: 0;

}
.btn-type{
  width: 180px;
  font-size:15px;

}
.btn-type-active{
  width: 180px;
  font-size: 15px;
}
.pricing-plan{
  margin-top: 20px;
}
}
</style>
