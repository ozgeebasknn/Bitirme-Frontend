<template>
  <section class="bg-reg">
    <div class="container vhl pt-5">
      <div class="row d-flex my-8 py-4">
        <div class="col col-xl-11">
          <div class="card border">
            <div class="row g-0">
              <div class="col-md-7 maxW col-lg-5 d-none d-md-block">
                <img
                  src="..\assets\görseller\loginJpg\log.jpg"
                  alt="login form"
                  class="img-fluid h-100"
                  style="border-radius: 1rem 0 0 1rem"
                />
              </div>
              <div class="col-md-6 maxW col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <div>
                    <div class="h-25">
                      <span class="h1 fw-bold mb-0">ROOMMATE</span>
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px">
                      Hesabınıza giriş yapın
                    </h5>

                    <div class="form-outline mb-4">
                      <v-text-field v-model="email" label="Email" type="email"></v-text-field>
                    </div>

                    <div class="form-outline mb-4">
                      <v-text-field v-model="password" label="Şifre" type="password"></v-text-field>
                    </div>

                    <div class="pt-1 mb-4 align-content-end">
                      <button @click="onLogin()" class="cta">
                        <span>Giriş</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <a class="small text-muted" href="#!">Şifreni mi Unuttun?</a>
                    <p class="mb-5 pb-lg-2" style="color: #393f81">
                      Hesabınız yok mu?
                      <a href="/kayit" style="color: #393f81">Buradan kayıt olun</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>


<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { URL } from "../utilty/config";
import setAuthHeader from "../utilty/setAuthHeader.js";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    onLogin() {
      // axios.defaults.headers.common["Authorization"] =
      //   "Bearer " + localStorage.getItem("jwt");
      axios
        .post(URL + "users/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Giriş başarılı",
              showConfirmButton: false,
              timer: 1500,
            });
            const token=localStorage.setItem("token", res.data.tokens.refresh_token);
            // localStorage.getItem("token", res.data.tokens.access_token);
            // setAuthHeader(res.data.tokens.access_token);
            this.$router.push("/anasayfa");
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title:
                "Giriş başarısız lütfen giriş bilgilerinizi kontol ediniz!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },

  setup() {
    const router = useRouter();
  },
};
</script>

<style scoped>
</style>
