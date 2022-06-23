<template>
  <div class="container contacts__container">
    <v-container>
      <v-row>
       <v-col>
        <address class="footer__afress">адрес г. Ташкент ул. Олтинтепа 28</address>
        <a class="footer__link" href="tel:+998950507060">Контакт  +998 95 050 70 60</a>
        <br>
        <a class="footer__link" href="http://healthyhome.uz">Instagram</a>
       </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-gmail", "mdi-instagram"],
  }),
};
</script>
<style scoped>
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.footer__afress{
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
}
.footer__link{
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 20px;
}
.contacts__container{
   background: #6aaf38;;
   padding-top: 50px;
   padding-bottom: 50px;
}
.contacts__container {
  background-color: #6aaf38;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: max(72px, calc((100% - 1180px) / 2));
  padding-right: 0;
  max-width: none;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}



</style>
