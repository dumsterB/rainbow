<template>
  <div class="container contacts__container">
    <v-container>
      <v-row>

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
.map__title {
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
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
.contacts__column {
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding-right: 20px;
}

.contacts__list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.contacts__link {
  display: flex;
  align-items: center;
  gap: 3px;
  transition: color 0.3s ease-in-out;
  color: white;
}

.contacts__link svg {
  color: white;
  transition: color 0.3s ease-in-out;
}

.social {
  display: flex;
  gap: 30px;
}

.social__link {
  color: #4394f4;
}
</style>
