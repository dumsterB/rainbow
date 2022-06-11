<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      style="
        width: 100%;
        height: 100vh;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
      "
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { src: require("@/assets/slidde1.jpg") },
        { src: require("@/assets/slide2.jpg") },
        { src: require("@/assets/slide1.jpg") },
        { src: require("@/assets/slide3.jpg") },
      ],
    };
  },
};
</script>
<style scoped lang="css"></style>
