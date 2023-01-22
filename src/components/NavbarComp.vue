<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-item" href="http://localhost:8080/">
        <img src="../assets/görseller/roommate.png"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="row col-md-12">
          <div class="col-md-7">
            <ul class="navbar-nav d-flex justify-content-end">
              <li class="nav-item p-1">
                <router-link to="/favoriler" id="button">
                  <button
                    type="button"
                    class="btn btn-outline-light"
                    @click="git()"
                  >
                    <strong>Hesabım</strong>
                  </button>
                </router-link>
              </li>
              <li class="nav-item p-1">
                <router-link to="/favoriler" id="button">
                  <button type="button" class="btn btn-outline-light">
                    <strong>Favorilerim</strong>
                  </button>
                </router-link>
              </li>
              <li class="nav-item p-1">
                <router-link to="/ilanEkle" id="button">
                  <button type="button" class="btn btn-outline-light">
                    <strong>İlan Ekle</strong>
                  </button>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-5">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
              <li class="nav-item p-1">
                <button type="button" class="btn btn-danger">
                  <router-link
                    to="/"
                    class="button is-success is-light nav-item"
                    id="button"
                  >
                    <strong>Çıkış</strong>
                  </router-link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";
import { reactive } from "vue";
import { URL } from "../utilty/config";
export default {
  setup() {
    const router = useRouter();
  },
  data: () => ({
    user: reactive({}),
    user: [],
  }),
  methods: {
    git() {
      this.$router.push("/profil/" + this.user[0].user_id._id);
    },
    getAds() {
      axios
        .get(URL + "userDetail")
        .then((response) => {
          this.user = response.data;
          cosnole.log(this.user)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log( this.user[0].user_id._id)
    this.getAds();
  },
  // created() {
  //   axios
  //     .get(URL + "users/" + `${this.$route.params.id}`)
  //     .then((response) => {
  //     //  JSON.parse(JSON.stringify( response.data));
  //       this.user=response.data;
  //       console.log(response.data);
  //     });
  // },
};
</script>

<style scoped>
.btn :hover {
  color: black;
}

h3 {
  margin: 40px 0 0;
}

.navbar {
  background-color: #00947e !important;
}

#button {
  text-decoration: none;
  color: white;
}

img {
  width: 150px;
}
</style>
