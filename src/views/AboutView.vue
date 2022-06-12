<template>
  <div class="about__container">
    <div class="about">
      <img class="about__photo" src="../assets/rainbow.png" alt="" />
    </div>
    <h2 class="about__title">Принцип работы</h2>
    <div class="about__wrap-work">
      <div>
        <img src="../assets/rainbow.png" alt="" />
      </div>
      <div>
        <p class="work__description">
          Аэродинамика: Воздух в движений Воздух в движений собирает пыль,
          мелкие частицы и тд в резервуар Rainbow с водой.
        </p>
        <p class="work__description">
          Гидродинамика: Вода в движений Вода в движений собирает пыль и мусор в
          воде с помощью образующегося водного вихря. А чистый, освеженный
          воздух распостраняется по всей комнате.
        </p>
        <p class="work__description">
          Сочетание Аэродинамики и Гидродинамики дает Вам чистый и здоровый
          образ жизни.
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
    };
  },
};
</script>

<style lang="css" scoped>
.about__wrap-work {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.work__description{
  padding: 10px;
  max-width: 500px;
  font-size: 18px;
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
