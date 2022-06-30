<template>
  <div>
    <v-carousel height="80vh" hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"

      >
        <v-row class="fill-height" align="center" justify="center">
          <div class="carousel__text">
            <h2 class="carousel__title">
             {{ $t (item.title)}}
            </h2>
            <a href="#" class="carousel__link"
              > {{ $t("carousel.slidelink") }}</a
            >
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {

           items: [
               {
                  src: require("../assets/slide4.jpg"),
                  title: "carousel.slideOne"
               },
               {
                 src: require("../assets/slide5.jpg"),
                 title: "carousel.slideTwo",
               },
                {
                  src: require("../assets/slide1.jpg"),
                  title: "carousel.slideThree"
               },
               {
                 src: require("../assets/slide3.jpg"),
                 title: "carousel.slideFour",
               },
            ]
        }
    }
}

</script>
<style>
.v-image__image {
  box-shadow: inset 0 0 0 100vw rgba(0, 0, 0, 0.4) !important;
}
</style>
<style scoped>
.carousel__title {
  font-family: "Arial", "Helvetica", "sans-serif";
  height: auto;
  color: white;
  text-decoration: none;
  white-space: normal;
  min-height: 0px;
  font-weight: 700;
  min-width: 0px;
  max-height: none;
  max-width: none;
  text-align: center;
  line-height: 50px;
  letter-spacing: 0px;
  font-weight: 400;
  font-size: 40px;
  transform-origin: 50% 50% 0px;
  transform: translate(0px);
  opacity: 1;
  visibility: visible;
  text-align: center;
  margin-bottom: 50px;
}
.carousel__link {
  background-color:#4FC3F7 ;
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
.carousel__text {
  width: 100%;
  max-width: 680px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
@media(max-width:800px){
  .carousel__title{
    font-size: 25px;
    line-height: 40px;
  }
  .carousel__link{
    font-size: 12px;
    line-height: 16px;

  }
}
</style>
