<template>
  <div>
    <v-dialog
        v-model="dialog"
        width="800"
    >
      <v-card class="pa-5">
        <v-card-text>
          Спасибо за регистрацию!
          <br>
          Наши операторы с Вами свяжутся для подтверждения регистрации и ответов на вопросы.
          С уважением, Rainbow
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            Понятно
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-container>
      <h1 style="text-align: center">Заказать званок</h1>
      <v-row>
        <v-col cols="6">
          <v-card elevation="1" class="contactTryCard">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="pa-10"
            >
              <v-text-field
                  v-model="name"

                  label="Ваше имя"
                  required
              ></v-text-field>

              <v-text-field
                  v-model="phone"
                  label="Номер телефона"
                  :rules="[v => !!v || 'Номер необходима']"
                  required
              ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    dark large
                    elevation="0"
                    class="primary"
                    @click="submitForm"
                >
                  Отправить
                </v-btn>
              </v-card-actions>

            </v-form>
          </v-card>

        </v-col>
        <v-col cols="6">
          <v-card class="contactTryCard">
            <h1>SOcial media</h1>
          </v-card>

        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForTry",
  data() {
    return {
      menu: '',
      date: '',
      name: '',
      age: '',
      menu2: '',
      valid: '',
      phone: '',
      time: '',
      email: '',
      timeSlots: [],
      dialog: false,
      nowDate: new Date().toISOString().slice(0, 10) && '2022-01-13',
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false
    }
  },
  methods: {
    submitForm() {
      this.dialog = !this.dialog;
      let data = {
        name: this.name,
        age: this.age,
        time: this.time,
        date: this.date,
        phone: this.phone
      }
      let formData = new FormData()
      for (let key in data) {
        formData.append(key, data[key]);
      }
      axios.post("https://event.milon.uz/rf/form?type=form2", formData)
          .then(function (response) {
            console.log(response, 'response');
          })
      this.name = ''
      this.age = ''
      this.time = ''
      this.date = ''
      this.phone = ''
      this.$refs.form.reset()
    }
  },
  computed: {
    disableButton() {
      return this.phone
    }
  },
  mounted() {

  }

}
</script>

<style scoped>

</style>