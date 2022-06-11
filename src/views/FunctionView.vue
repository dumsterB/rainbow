<template>
  <div class="functionRs">
    <h2>Функции rainbow</h2>
     <div class="func-rainbow">
       <img class="func__img" src="../assets/image2.png" alt="rainbow photo">
       <p>В системе Rainbow используется водяной фильтр и сепаратор;  Пыль не только оседает на мебели, вещах и на полу, но также витает в воздухе.  Система улавливает все частицы пыли, бактерии и факторы , вызывающие или провоцирующие аллергию, возвращая в Ваш дом только естественно чистый, профильтрованный водой воздух. Для пыли, которая не смачивается водой, используются фильтры HEPA . Благодаря тройной системе очистки, Rainbow способен удалять частицы размером с молекулу.
</p>
     </div>
    <section class="product">
      <div class="container product__container">
        <img src="../assets/cover.jpg">
        <div class="product__content">
          <p class="product__description">
           Rainbow Systems позволяет проводить глубинную чистку, избавляя от грязи и пыли из глубины таких изделий как: ковры, матрасы, мягкая мебель

          </p>
        </div>
      </div>
    </section>
     <section class="product">
      <div class="container product__container">
        <img src="../assets/duxi.jpg">
        <div class="product__content">
          <p class="product__description">
          Для того чтобы придать воздуху в квартире аромат, в контейнер с водой можно добавлять несколько капель ароматизатора. Или же применить увлажнитель Rainbow Rain Mate. Вы можете использовать ароматы цитруса, эвкалипта, фиалки, ванили, яблока и другие.


          </p>
        </div>
      </div>
    </section>
     <section class="product">
      <div class="container product__container">
        <img src="../assets/zhivye-kartiny-1.jpg">
        <div class="product__content">
          <p class="product__description">
          С помощью системы Rainbow также можно очистить и увлажнить растения в вашем доме. Для очищения комнатных цветов необходимо использовать насадку, предназначенную для сбора пыли с хрупких поверхностей. Щетка не повреждает растения, а компрессор-пульверизатор позволяет одновременно с чисткой увлажнить листья. Эту же насадку можно применять для очищения лежанок домашних животных: она удалит грязь и шерсть эффективнее, чем обычная щетка.

          </p>
        </div>
      </div>
    </section>
     <section class="product">
      <div class="container product__container">
        <img src="../assets/plato.webp">
        <div class="product__content">
          <p class="product__description">
          Чистка одежды с Rainbow удалит грязь из глубины изделий и возвратит им первозданный цвет. Rainbow бережно очищает любые ткани, не повреждая их.


          </p>
        </div>
      </div>
    </section>
     <section class="product">
      <div class="container product__container">
        <img src="../assets/clec.jpg">
        <div class="product__content">
          <p class="product__description">
          Очистительная система избавляет ваши спальные зоны от опасных пылевых клещей. Пылевые клещи нередко называют спальными,

          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="css">

.func__img{
  width: 100%;
  height: 60vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: auto;
}
.product {
  padding: 60px 0;
}

.product:nth-child(odd) .product__container {
  flex-direction: row-reverse;
}

.product__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

}

.product__content {

}

.product__title {
  font-size: 60px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
}

.product__description {
  line-height: 150%;
  margin-bottom: 50px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
 </style>
