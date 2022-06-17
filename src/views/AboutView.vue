<template>
  <div class="about__container">
    <h2 class="aboutOne__title">О нас </h2>
    <div class="about">
<<<<<<< HEAD
      <div class="about__text">
        <p class="about__text-item">
          Healthy Home Уникальная услуга для здоровья по очищению воздуха Вашего
          дома Впервые в Узбекистане - американская очистительная система
          Rainbow
        </p>
        <p class="about__text-item">
          Система, при помощи которой возможно идеальное очищение воздуха и
          любых всевозможных поверхностей от грязи, пыли, песка, пылевых клещей,
          вирусов, и бактерий, которая не только прекрасно очищает ваш дом, но и
          улучшает общее состояние вашего здоровья. Благодаря Rainbow вы можете
          забыть об аллергии на пыль, раздражении слизистой и спать спокойно.
        </p>
      </div>
      <div class="about__images">
        <img src="../assets/lec.jpg" alt="" class="about__img" />
        <img src="../assets/image2.png" alt="" class="about__img" />
        <img src="../assets/people.jpg" alt="" class="about__img" />
      </div>
    </div>
    <h2 class="about__title">{{ $t("principWork.title") }}</h2>
    <div class="about__wrap-work">
=======
  <v-carousel height="80vh" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <div class="d-flex justify-space-between">

      <div class="">
    <h1 class="mt-15"> fkewjfewj</h1>
      </div>
      <div class="carousel_img">
        <img height="400" src="../assets/rainbow.png" alt="">
      </div>
      </div>

    </v-carousel-item>
  </v-carousel>
    </div>
    <h2 class="about__title"> {{ $t("principWork.title") }}</h2>
<!--    <div class="about__wrap-work">
>>>>>>> 187e86400854a5720f3e53728c3a33e31cdc34e6
      <div>
      </div>
      <div>
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
    </div>-->
    <v-container>
      <v-row>
        <v-col>
          <img src="../assets/rainbow.png" alt="" />
        </v-col>
        <v-col>
          <div style="margin-top: 100px">
            <p  class="work__span">  {{ $t("principWork.title__one") }}  </p>
            <br> <p class="work__description">
            {{ $t("principWork.description__one") }}
          </p>
            <p  class="work__span"> {{ $t("principWork.title__two") }}</p>
            <p class="work__description"> <br>
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
  <!-- <h2 class="about__title">Преимущества</h2> -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="css" scoped>
.about__text-item{
   max-width: 700px;
  font-size: 25px;
  line-height: 29px;
  font-weight: 400;
  color: #455560;
  outline: 0 none;
}
.aboutOne__title{
    margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.about__images{
  max-width: 700px;
}
.about__text{
max-width: 700px;
}
.about__img {
background-size: contain;
max-width: 400px;
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
.carousel_img{
  justify-content: center;
  display: flex;
  margin: auto;
}
</style>
