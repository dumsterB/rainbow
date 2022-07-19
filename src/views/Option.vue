<template>
  <div>
    <h2 class="main-title" v-html="$t('option.option__one')"></h2>
    <p class="main-desc">
      {{ $t("option.option__two") }}
    </p>

    <div class="wrap__option">

      <v-col class="left_option">
        <span>
          <label class="label__option"> {{ $t("option.option__three") }}</label>
          <img src="../assets/option_1.webp" class="img__option" />
        </span>
        <span
          ><label class="label__option">{{ $t("option.option__four") }}</label>
          <img src="../assets/option_2.webp" alt="" class="img__option" />
        </span>
        <span
          ><label class="label__option"> {{ $t("option.option__five") }}</label>
          <img src="../assets/option_3.webp" alt="" class="img__option" />
        </span>
      </v-col>

      <v-col>
        <img data-aos="fade-up" src="../assets/option-img.jpg" alt="" />
      </v-col>

      <v-col class="right__option">
        <span>
          <img src="../assets/option_4.webp" alt="" class="img__option" />
          <label class="label__option"> {{ $t("option.option__six") }}</label>
        </span>
        <span>
          <img src="../assets/option_5.webp" alt="" class="img__option" />
          <label class="label__option"> {{ $t("option.option__seven") }}</label>
        </span>
        <span>
          <img src="../assets/option_6.webp" alt="" class="img__option" />
          <label class="label__option"> {{ $t("option.option__eight") }}</label>
        </span>
      </v-col>
    </div>
  </div>
</template>

<style scoped>
.wrap__option {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding-top: 50px;
  margin-bottom: 50px;
}
.right__option {
  display: flex;
  justify-content: center;
  margin-left: -40px;
  flex-direction: column;
  align-items: center;
}
.left_option {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.img__option {
  padding-top: 16px;
  margin-right: 20px;
  margin-left: 20px;
}
.label__option {
  padding-top: 20px;
  color: #4fc3f7;
  font-size: 18px;
}
.main-title {
  margin-top: 50px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: #455560;
  padding-left: 40px;
  padding-right: 40px;
}
.main-desc {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #455560;
  padding-top: 15px;
}
.left_option_mobile{
  display: none!important;
}
.right__option_mobile{
  display: none!important;
}
@media (max-width: 700px) {
  .main-title {
    font-size: 35px;
  }
  .left_option_mobile{
    display: block!important;
  }
  .right__option_mobile{
    display: block!important;
  }
  .left_option{
    display: none!important;
  }
  .right__option{
    display: none!important;
  }
}
</style>
