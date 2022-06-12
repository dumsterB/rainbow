<template>
  <div class="cetrificate__container">
    <h2 class="certificate__title">Сертификаты компании</h2>
    <div class="certificate">
      <div class="certificate__card">
        <img src="../assets/serf1.png" alt="" >
        <p>
          Эффективность уборки Rainbow для страдающих от аллергии и астмы
          подтверждена тестами организаций AAFA (Asthma and allergy Foundation
          of America) и ASL (Allergy Standards Limited).
        </p>
      </div>
      <div class="certificate__card">
        <img src="../assets/serf2.png" alt="" >
        <p>
          Ассоциация AHAM подтвердила, что Rainbow – пылесос, обеспечивающий
          высокое качество очистки воздуха.
        </p>
      </div>
      <div class="certificate__card">
        <img src="../assets/serf3.png" alt="" >
        <p>
          Сертификат «The Carpet and Rug Institute» подтверждает соответствие
          пылесоса стандартам очистки ковров и напольных покрытий с сохранением
          внешнего вида ворса.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.certificate__title {
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.certificate {
  padding-top: 100px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
}
.certificate__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.certificate__card p {
  max-width: 300px;
  margin: 30px 20px 0 20px;
  font-size: 16px;
}
</style>
