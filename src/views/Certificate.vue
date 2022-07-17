<template>
  <div>
    <h2 style="  text-align: center;
        margin-top: 40px;
        line-height: 48px;
        margin-bottom: 20px;
        font-size: 60px !important;
        font-weight: 300;
        text-align: center;
        color: #455560;"
    >
      Сертификаты Компании
    </h2>
    <div class="wrap__certificate">
      <div class="certificate__card">
        <img src="../assets/certificate1.png"  >
        <p class="certificate__text">
          Сертификат «The Carpet and Rug Institute» подтверждает соответствие
          пылесоса стандартам очистки ковров и напольных покрытий с сохранением
          внешнего вида ворса.
        </p>
      </div>

      <div class="certificate__card">
        <img src="../assets/certificate_2.png"  >
        <p class="certificate__text">
          Ассоциация AHAM подтвердила, что Rainbow – пылесос, обеспечивающий
          высокое качество очистки воздуха.
        </p>
      </div>

      <div class="certificate__card">
        <img src="../assets/certificate_3.png" >
        <p class="certificate__text">
          Эффективность уборки Rainbow для страдающих от аллергии и астмы
          подтверждена тестами организаций AAFA (Asthma and allergy Foundation
          of America) и ASL (Allergy Standards Limited).
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title{

}
.wrap__certificate{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
}
.certificate__card{
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  margin-bottom: 50px;
}
.certificate__text{
  margin-top: auto;
  padding-top: 20px;
  font-size: 18px;
  font-weight: 500;
  font-family: sans-serif;

}
</style>
