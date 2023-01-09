<template>
  <navbar-comp></navbar-comp>
  <div class="h-200 tumSayfa bg-color">
    <div class="container py-5 h-200">
      <div class="row d-flex justify-content-center align-items-center h-10">
        <div class="col-lg-8 col-xl-6">
          <div class="card rounded-3">
            <div class="row mid pt-2">
              <img
                src="../assets/görseller/loginLogo.png"
                class="w-25"
                alt="Sample photo"
              />
            </div>

            <div class="card-body p-4 p-md-5">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="user.full_name"
                  required
                />
                <label for="floatingInput">İsim</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="user.email"
                  required
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="user.password"
                  required
                />
                <label for="floatingInput">Şifre</label>
              </div>

              <button @click="updateUser()" class="btn btn-success btn-lg mb-1">
                Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from "vue-router";
import NavbarComp from "@/components/NavbarComp.vue";
import axios from "axios";
import { reactive } from "vue";
import { URL } from "../utilty/config";
export default {
  components: {
    NavbarComp,
  },
  setup() {
    const router = useRouter();
  },

  data: () => ({
    user: reactive({}),
  }),
  created() {
    axios.get(URL + "users/" + this.$route.params.id).then((response) => {
      this.user = response.data;
    });
  },
  methods: {
    updateUser() {
      axios
        .post(URL + "", {
          full_name: this.user.full_name,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
  // data() {
  //   return {
  //     currentPage: 1,
  //     cardsPerPage: 5,
  //     user: [],
  //   };
  // },
  // methods: {
  //   getUser() {
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       },
  //     };
  //     axios
  //       .get(URL + "users")
  //       .then((response) => {
  //         this.user = response.data;
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  // },
  // created() {
  //   this.getUser();
  // },
  // setup() {
  //   const router = useRouter();
  // },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
}

.card {
  background: transparent;
  border: 2px solid white;
}
.vh {
  min-height: 100vh;
}
.mid {
  place-content: center;
}
</style>
