<template>
<div>
  <v-carousel height="80vh" hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    >
    <v-row
          class="fill-height"
          align="center"
          justify="center">
             <div class="carousel__text">
                  <h2 class="carousel__title">
             {{item.text}}
             </h2>
             <a href="#" class="carousel__link">ЗАПЛАНИРУЙТЕ ДЕМОНСТРАЦИЮ НА ДОМУ</a>
             </div>

        </v-row>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      items: [
        {
          src: require('../assets/slide4.jpg'),
           text:' Радуга ® Система очистки обеспечивает сертифицированную очистку воздуха в вашем доме.'
        },
        {
          src: require('../assets/slide5.jpg'),
           text:"Оригинальная система домашней уборки на водной основе. Построен на века."
        },
         {
          src: require('../assets/slide1.jpg'),
           text:"Объедините силу радуги ® Система очистки с линейкой эксклюзивных ароматов Rainbow для дома, который выглядит, пахнет и ощущается восхитительно чистым."
        },
         {
          src: require('../assets/slide3.jpg'),
           text:"Rainbow сертифицирована asthma & allergy friendly ™ Американским фондом по борьбе с астмой и аллергией*."
         }
      ],

    }
  }
}
</script>

<style scoped>
.carousel__title{
font-family: "Arial", "Helvetica", "sans-serif";
height: auto;
color: rgb(69, 85, 96);
text-decoration: none;
white-space: normal;
min-height: 0px;
min-width: 0px;
max-height: none;
max-width: none;
text-align: center;
line-height: 50px;
letter-spacing: 0px;
font-weight: 400;
font-size: 33px;
transform-origin: 50% 50% 0px;
transform: translate(0px);
opacity: 1;
visibility: visible;
text-align: center;
margin-bottom: 50px;
}
.carousel__link{
background-color: rgb(101, 172, 50);
font-family: "Roboto";
cursor: pointer;
outline: currentcolor none medium;
box-shadow: none;
box-sizing: border-box;
border-radius: 3px;
color: rgb(255, 255, 255);
text-decoration: none;
white-space: normal;
width: 440px;
height: 58px;
min-height: 0px;
min-width: 0px;
max-height: none;
max-width: none;
text-align: center;
line-height: 17px;
letter-spacing: 0px;
font-weight: 500;
font-size: 15px;
border-color: transparent;
padding: 20px 40px;
transform-origin: 220px 29px 0px;
transform: translate(0px);
opacity: 1;
visibility: visible;
border-width: 0px;
border-style: none;
/* text-align: center; */
}
.carousel__text{
  width: 100%;
  max-width: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>