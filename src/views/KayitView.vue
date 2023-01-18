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
                      Kayıt Ol
                    </h5>
                    
                    <div class="form-outline mb-4 d-flex">
                      <div class="col-md-6">
                        <v-text-field class="px-1" v-model="this.first_name" label="İsim"></v-text-field>
                      </div>  
                      <div class="col-md-6">
                        <v-text-field v-model="this.last_name" label="Soyisim"></v-text-field>
                      </div>  
                    </div>
                  
                    <div class="form-outline mb-4">
                      <v-text-field v-model="this.email" label="Email" ></v-text-field>
                    </div>

                    <div class="form-outline mb-4">
                      <v-text-field v-model="this.password" label="Şifre" ></v-text-field>
                    </div>

                    <div class="pt-1 mb-4 align-content-end">
                      <button @click="onsubmit()" class="cta">
                        <span>Kayıt Ol</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                          <path d="M1,5 L11,5"></path>
                          <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                      </button>
                    </div>
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
import axios from "axios";
import { URL } from "../utilty/config";
import Swal from "sweetalert2/dist/sweetalert2.js";
export default {
  data: () => ({
    first_name:"",
    last_name:"",
    email: "",
    password: "",
    name:"",
    surname:"",
  }),
  methods: {
    onsubmit() {
      axios
        .post(URL + "users", {
          first_name:this.first_name,
          last_name:this.last_name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
         
          console.log(res);
          if (res.status == 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Kayıt başarılı",
              showConfirmButton: false,
              timer: 1500,});
          }
          this.$router.push("/giris");
        });
    },
  },
};
</script>
<style scoped>
.container {
  height: 100vh;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>