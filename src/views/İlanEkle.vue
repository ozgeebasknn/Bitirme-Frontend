<template>
  <navbar-comp></navbar-comp>
  <div class="h-200 tumSayfa vh bg-color">
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
                  v-model="this.name"
                  required
                />
                <label for="floatingInput">Başlık</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.kira"
                  required
                />
                <label for="floatingInput">Kira</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.isitma"
                  required
                />
                <label for="floatingInput">Isıtma</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.odaSayisi"
                  required
                />
                <label for="floatingInput">Oda Sayısı</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.esyaDurumu"
                  required
                />
                <label for="floatingInput">Eşya Durumu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.balkonDurumu"
                  required
                />
                <label for="floatingInput">Balkon Durumu</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  v-model="this.aciklama"
                  required
                />
                <label for="floatingInput">Açıklama</label>
              </div>
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label"
                  >Multiple files input example</label
                >
                <input
                  class="form-control"
                  type="file"
                  id="formFileMultiple"
                  multiple
                />
              </div>
              <button @click="ilanEkle()" class="btn btn-success btn-lg mb-1">
                Yayınla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { URL } from "../utilty/config";
export default {
  components: {
    NavbarComp,
  },
  setup() {
    const router = useRouter();
  },
  data: () => ({
    name: " ",
    kira: " ",
    isitma: " ",
    odaSayisi: " ",
    esyaDurumu: " ",
    aciklama: " ",
    balkonDurumu: "",
  }),
  methods: {
    ilanEkle() {
      axios
        .post(URL + "projects", {
          // token: localStorage.getItem("jwt"),
          name: this.name,
          kira: this.kira,
          isitma: this.isitma,
          odaSayisi: this.odaSayisi,
          esyaDurumu: this.esyaDurumu,
          aciklama: this.aciklama,
          balkonDurumu: this.balkonDurumu,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>
.container {
  min-height: 100vh;
}
/* .logo{
  background: url('../assets/görseller/backgroundAnasayfa.png') no-repeat center center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
} */
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
