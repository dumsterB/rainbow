<template>
<div>
 <h2 style=" margin-top: 50px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  color: #455560;">{{ $t("option.option__one") }}</h2>

 <p style="max-width: 800px;
margin: 0 auto; text-align: center; color: #455560; padding-top: 15px;">{{ $t("option.option__two") }}</p>
<div class="wrap__option">
	<v-col-4 class="left_option">
<span> <label class="label__option"> {{ $t("option.option__three") }}</label>
<img src="../assets/option_1.webp" class="img__option">

</span>
<span><label class="label__option">{{ $t("option.option__four") }}</label>
<img src="../assets/option_2.webp" alt="" class="img__option">

</span>
<span><label  class="label__option"> {{ $t("option.option__five") }}</label>
<img src="../assets/option_3.webp" alt="" class="img__option">

</span>

	</v-col-4>

<v-col-4>
   <img src="../assets/option-img.jpg" alt="">
	</v-col-4>

<v-col-4 class="right__option">

<span>
<img src="../assets/option_4.webp" alt="" class="img__option">
 <label  class="label__option"> {{ $t("option.option__six") }}</label>
</span>
<span>
<img src="../assets/option_5.webp" alt="" class="img__option">
<label  class="label__option"> {{ $t("option.option__seven") }}</label>
</span>
<span>
<img src="../assets/option_6.webp" alt="" class="img__option">
<label  class="label__option"> {{ $t("option.option__eight") }}</label>
</span>

	</v-col-4>

</div>

</div>
</template>

<style scoped>
.wrap__option{
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
	margin-bottom: 50px;
}
.right__option{
	display: flex;
	justify-content: center;
flex-direction: column;
	align-items: center;
}
.left_option{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
.img__option{
padding-top: 16px;
margin-right: 20px;
margin-left: 20px;


}
.label__option{
	padding-top: 20px;
	color: #4FC3F7;
	font-size: 18px;
color: #1ab7ea;
}
</style>