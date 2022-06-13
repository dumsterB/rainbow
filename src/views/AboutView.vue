<template>
  <div class="about__container">
    <div class="about">
     <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    </div>
    <h2 class="about__title"> {{ $t("principWork.title") }}</h2>
    <div class="about__wrap-work">
      <div>
        <img src="../assets/rainbow.png" alt="" />
      </div>
      <div>
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
    </div>
  </div>
  <!-- <h2 class="about__title">Преимущества</h2> -->
</template>

<script>
export default {
  data() {
    return {
      show: false,
       items: [
          {
            src: '../assets/bgHeader.jpeg',
          },
           {
            src: '../assets/',
          },
        ],
    };
  },
};
</script>

<style lang="css" scoped>
.work__span{
 margin:  20px 0 5px 0;
font-size: 20px;
line-height: 30px;
max-width: 600px;
color: #455560;
}
.about__wrap-work {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.work__description{
  max-width: 500px;
  font-size: 15px;
line-height: 24px;
font-weight: 400;
color: #455560;
outline: 0 none;
}
.about {
  background-image: url(../assets/bgHeader.jpeg);
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
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
</style>
