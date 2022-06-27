<template>
<div>
 <div class="order__wrap">
    <v-dialog v-model="dialog" width="800">
      <v-card class="pa-5">
        <v-card-text>
           {{ $t("callBlock.callRegist") }}
          <br />
           {{ $t("callBlock.callThanks") }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> {{ $t("callBlock.undest") }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <h2 class="call__title" > {{ $t("callBlock.title") }}</h2>
      <v-row>
        <v-col cols="6">
          <v-card  elevation="1" class="contactTryCard">
            <v-form ref="form" v-model="valid" lazy-validation class="pa-10">
              <v-text-field
                v-model="name"
                label="Ваше имя"
                required
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="Ваш номер"
                :rules="[(v) => !!v || 'Номер необходима']"
                required
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  large
                  elevation="0"
                  class="primary"
                  @click="submitForm"
                >
                 {{ $t("callBlock.send") }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="contactTryCard">
            <iframe
             width="100%"
             height="275px"
              src="https://www.youtube.com/embed/45FcfPW4S5M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>


       <div class="order__wrap-mobile">
    <v-dialog v-model="dialog" width="800">
      <v-card class="pa-5">
        <v-card-text>
           {{ $t("callBlock.callRegist") }}
          <br />
           {{ $t("callBlock.callThanks") }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> {{ $t("callBlock.undest") }} </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <h2 class="call__title" > {{ $t("callBlock.title") }}</h2>
      <v-row  >
        <v-col class="order__row" >
          <v-card class="contactTryCard">
            <iframe
             width="100%"
             height="275px"
              src="https://www.youtube.com/embed/45FcfPW4S5M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-col>
          <v-col >
          <v-card  elevation="1" class="contactTryCard">
            <v-form ref="form" v-model="valid" lazy-validation class="pa-10">
              <v-text-field
                v-model="name"
                label="Ваше имя"
                required
              ></v-text-field>

              <v-text-field
                v-model="phone"
                label="Ваш номер"
                :rules="[(v) => !!v || 'Номер необходима']"
                required
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  dark
                  large
                  elevation="0"
                  class="primary"
                  @click="submitForm"
                >
                 {{ $t("callBlock.send") }}
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</div>



</template>

<script>
import axios from "axios";

export default {
  name: "ContactForTry",
  data() {
    return {
      menu: "",
      date: "",
      name: "",
      age: "",
      menu2: "",
      valid: "",
      phone: "",
      time: "",
      email: "",
      timeSlots: [],
      dialog: false,
      nowDate: new Date().toISOString().slice(0, 10) && "2022-01-13",
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
    };
  },
  methods: {
    submitForm() {
      this.dialog = !this.dialog;
      let data = {
        name: this.name,
        age: this.age,
        time: this.time,
        date: this.date,
        phone: this.phone,
      };
      let formData = new FormData();
      for (let key in data) {
        formData.append(key, data[key]);
      }
      axios
        .post("https://event.milon.uz/rf/form?type=form2", formData)
        .then(function (response) {
          console.log(response, "response");
        });
      this.name = "";
      this.age = "";
      this.time = "";
      this.date = "";
      this.phone = "";
      this.$refs.form.reset();
    },
  },
  computed: {
    disableButton() {
      return this.phone;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.call__title{
  margin-top: 40px;
  line-height: 48px;
  margin-bottom: 20px;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  text-align: center;
  color: #455560;
}
.order__wrap{
  display: none !important;
}
@media(max-width:800px){
.order__wrap{
  display: none !important;
}
.order__wrap-mobile{
  display: block !important;
}
.call__title{
  font-size: 40px;
  line-height: 60px;
}
.order__row{
  display: flex;
 min-width: 350px;

}
}
</style>
