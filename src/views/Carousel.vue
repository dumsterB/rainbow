<template>
<div>
  <v-carousel height="80vh" hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
    ></v-carousel-item>
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
          src:('https://rainbowsystem.com/wp-content/uploads/2019/11/Power-Nozzle-1919x722_SFW_OPT4-1-100x50.jpg'),
        },
        {
          src: require('../assets/carousel3.jpg'),
        },
        {
          src: require('../assets/carousel2.jpg'),
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>