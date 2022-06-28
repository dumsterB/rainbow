<template>
<div>
 <div class="about__container">
    <h2 class="aboutOne__title">О нас</h2>
    <div class="about">
      <v-container fluid>
        <v-row>
          <v-col>
            <div class="about__text"  data-aos="fade-right">
              <p class="about__text-item">
                <span class="about__span" >
                  Healthy Home - уникальная услуга для улучшения состояния
                  здоровья для всех членов семьи !</span
                >
                <br />
                <br />

                Впервые в Узбекистане, проект HealthyHome предлагает к
                использованию американскую очистительную систему Rainbow, при
                помощи, которой возможно идеальное очищение воздуха и любых
                всевозможных поверхностей в доме - от грязи, пыли, песка,
                пылевых клещей, вирусов, и бактерий, - который не только
                прекрасно очищает ваш дом, но и улучшает общее состояние вашего
                здоровья.
              </p>
              <p class="about__text-item">
                Благодаря Rainbow вы можете забыть об аллергии на пыль,
                раздражении слизистой оболочки носоглотки, и спать спокойно. Мы
                единственная компания в Узбекистане, которая гарантирует, что
                наш сервис приносит чистоту и здоровье в дом клиента, благодаря
                возможностям системы Rainbow.
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="about__images" data-aos="fade-left">
              <v-container>
                <v-row class="pl-4 pr-4">
                  <v-col cols="3">
                    <img
                      height="120"
                      src="../assets/circle_card1.png"
                      alt=""
                      class="about__img"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card2.png"
                      alt=""
                      class="about__img"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card3.png"
                      alt=""
                      class="about__img"
                    />
                  </v-col>
                  <v-col cols="6">
                    <img
                      height="350"
                      src="../assets/image2.png"
                      alt=""
                      class="about__img"
                      style="margin-left: -10px"
                    />
                  </v-col>
                  <v-col cols="3">
                    <img
                      height="120"
                      src="../assets/circle_card4.png"
                      alt=""
                      class="about__img"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card6.jpg"
                      alt=""
                      class="about__img"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card5.jpg"
                      alt=""
                      class="about__img"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <h2 class="about__title">{{ $t("principWork.title") }}</h2>
    <v-container>
      <v-row>
        <v-col  data-aos="fade-right">
          <img
            class="wp-image-6059 size-full aligncenter"
            src="https://rainbowsystem.com/wp-content/uploads/2019/11/RainbowSRX-animation2.gif"
            alt="Rainbow SRX Animation"
            width="600"
            height="600"
          />
        </v-col>
        <v-col>
          <div style="margin-top: 100px"  data-aos="fade-left">
            <p class="work__span">{{ $t("principWork.title__one") }}</p>
            <br />
            <p class="work__description">
              {{ $t("principWork.description__one") }}
            </p>
            <p class="work__span">{{ $t("principWork.title__two") }}</p>
            <p class="work__description">
              <br />
              {{ $t("principWork.description__two") }}
            </p>
            <p class="work__span">
              {{ $t("principWork.description__three") }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>



<div class="about__container-mobile">
    <h2 class="aboutOne__title">О нас</h2>
    <div class="about">
      <v-container fluid>
        <v-row >
          <v-col>
            <div class="about__text"  data-aos="fade-right">
              <p class="about__text-item">
                <span class="about__span" >
                  Healthy Home - уникальная услуга для улучшения состояния
                  здоровья для всех членов семьи !</span
                >
                <br />
                <br />

                Впервые в Узбекистане, проект HealthyHome предлагает к
                использованию американскую очистительную систему Rainbow, при
                помощи, которой возможно идеальное очищение воздуха и любых
                всевозможных поверхностей в доме - от грязи, пыли, песка,
                пылевых клещей, вирусов, и бактерий, - который не только
                прекрасно очищает ваш дом, но и улучшает общее состояние вашего
                здоровья.
              </p>
              <p class="about__text-item">
                Благодаря Rainbow вы можете забыть об аллергии на пыль,
                раздражении слизистой оболочки носоглотки, и спать спокойно. Мы
                единственная компания в Узбекистане, которая гарантирует, что
                наш сервис приносит чистоту и здоровье в дом клиента, благодаря
                возможностям системы Rainbow.
              </p>
            </div>
          </v-col>
          <v-col>
            <div class="about__images" data-aos="fade-right">
              <v-container>
                <v-row class="pl-4 pr-4">
                   <v-col cols="6">
                    <img
                      height="350"
                       src="../assets/image2.png"
                      alt=""
                      class="about__img"
                      style="margin-left: -10px"
                    />
                  </v-col>
                </v-row>
                <v-row class="row__images">
                  <v-col cols="12">
                    <img
                      height="120"
                      src="../assets/circle_card1.png"
                      alt=""
                      class="about__img-circle"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card2.png"
                      alt=""
                      class="about__img-circle"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card3.png"
                      alt=""
                      class="about__img-circle"
                    />
                  </v-col>

                  <v-col cols="12">
                    <img
                      height="120"
                      src="../assets/circle_card4.png"
                      alt=""
                      class="about__img-circle"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card6.jpg"
                      alt=""
                      class="about__img-circle"
                    />
                    <img
                      height="120"
                      src="../assets/circle_card5.jpg"
                      alt=""
                      class="about__img-circle"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <h2 class="about__title">{{ $t("principWork.title") }}</h2>
    <v-container>
      <v-row class="wrap__princip">
        <v-col data-aos="fade-right" >
          <img
            class="img__gif wp-image-6059 size-full aligncenter"
            src="https://rainbowsystem.com/wp-content/uploads/2019/11/RainbowSRX-animation2.gif"
            alt="Rainbow SRX Animation"

          />
        </v-col>
        <v-col>
          <div style="margin-top: 60px"  data-aos="fade-right">
            <p class="work__span">{{ $t("principWork.title__one") }}</p>
            <br />
            <p class="work__description">
              {{ $t("principWork.description__one") }}
            </p>
            <p class="work__span">{{ $t("principWork.title__two") }}</p>
            <p class="work__description">
              <br />
              {{ $t("principWork.description__two") }}
            </p>
            <p class="work__span">
              {{ $t("principWork.description__three") }}
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>

  <!-- <h2 class="about__title">Преимущества</h2> -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
      mounted() {},
    };
  },
};
</script>

<style lang="css" scoped>
.about__text-item {
  font-size: 20px;
  padding: 10px;
  line-height: 29px;
  font-weight: 400;
  color: #455560;
  outline: 0 none;
}
.aboutOne__title {
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  text-align: center;
  color: #455560;
}
.about__span{
  font-size: 25px;
}
.about__images {
  max-width: 700px;
}
.about__text {
  max-width: 700px;
}
.about__img {
  border-radius: 50%; /* Скругление углов изображения */
  border: 5px solid #fff;
}
.work__span {
  margin: 20px 0 5px 0;
  font-size: 20px;
  line-height: 30px;
  max-width: 600px;
  color: #455560;
}
.about__wrap-work {
  display: flex;
  align-items: center;
  justify-content: center;
}
.work__description {
  max-width: 500px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  color: #455560;
  outline: 0 none;
}
.about {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.about__photo {
  padding: 20px 0;
}
.about__title {
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.about__description {
  max-width: 900px;
  font-size: 18px;
  color: #a0afba;
  text-align: center;
  margin: 0 auto;
  line-height: 24px;
  font-weight: 400;
  outline: 0 none;
  font-family: "Proxima", Helvetica, Arial, sans-serif;
}
.carousel_img {
  justify-content: center;
  display: flex;
  margin: auto;
}
.about__container-mobile{
  display: none !important;
}
@media(max-width: 800px){
.about__container{
  display: none !important;
}
.about__container-mobile{
  display: block !important;
}
.aboutOne__title{
    font-size: 40px;
    line-height: 60px;
  }
.about__span{
  font-size: 18px;
}
.about__text-item{
  font-size: 14px;
}

.about__title{
  font-size: 40px;
}
.img__gif{
width: 380px;
height: 400px;
}
.row.wrap__princip{
  display: block;
}
.work__span{
  font-size: 16px;
}
.work__description{
font-size: 14px;
}
.about__img{
  border-radius: none;
}
.row__images{
  margin: 0 auto;
}

.about__img-circle{
  margin-bottom: 20px;
  width: 100px;
  margin-right: 20px;
  padding: 0;
}

}
</style>
