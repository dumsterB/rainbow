<template>
  <div>
    <h2 class="main-title">
      {{ $t("certificate.title") }}
    </h2>
    <div class="wrap__certificate">
      <div class="certificate__card">
        <img src="../assets/certificate_3.png" />
        <p class="certificate__text">
          {{ $t("certificate.three") }}
        </p>
      </div>

      <div class="certificate__card">
        <img src="../assets/certificate_2.png" />
        <p class="certificate__text">
          {{ $t("certificate.two") }}
        </p>
      </div>

      <div class="certificate__card">
        <img src="../assets/certificate1.png" />
        <p class="certificate__text">
          {{ $t("certificate.one") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
}
.wrap__certificate {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
}
.certificate__card {
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-bottom: 50px;
}
.certificate__text {
  margin-top: auto;
  padding-top: 20px;
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  font-family: sans-serif;
}
.main-title {
  text-align: center;
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px !important;
  font-weight: 300;
  text-align: center;
  color: #455560;
}
@media (max-width: 700px) {
  .main-title {
    font-size: 35px !important;
  }
}
</style>
