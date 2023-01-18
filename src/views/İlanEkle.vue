<template>
  <layout-default>
    <v-card
        class="mx-auto my-5 rounded-lg shadow"
        max-width="800"
        max-height="1200"
    >
       <div class="row mid pt-2">
        <img
            src="../assets/görseller/loginLogo.png"
            class="w-25"
            alt="Sample photo"
        />
       </div>
      <v-container>
        <v-text-field label="Başlık" variant="outlined" clearable v-model="this.name"></v-text-field>
        <v-text-field label="Kira" variant="outlined" clearable v-model="this.kira"></v-text-field>
        <v-text-field label="Isıtma" variant="outlined" clearable v-model="this.isitma"></v-text-field>
        <v-text-field label="Oda Sayısı" variant="outlined" clearable v-model="this.odaSayisi"></v-text-field>
        <v-text-field label="Eşya Durumu" variant="outlined" clearable v-model="this.esyaDurumu"></v-text-field>
        <v-text-field label="Balkon Durumu" variant="outlined" clearable v-model="this.balkonDurumu"></v-text-field>
        <v-textarea label="Açıklama" variant="outlined" clearable v-model="this.aciklama"></v-textarea>
        <v-file-input
    label="File input"
    outlined
    clearable
    dense
    v-model="this.ilan_image"
  ></v-file-input>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <button class="cta" @click="ilanEkle()">
          <span>Gönder</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </v-card-actions>
    </v-card>
  </layout-default>
</template>

<script>
import LayoutDefault from "../layouts/DefauldLayout.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { URL } from "../utilty/config";
export default {
  components: {
    LayoutDefault,
  },
  setup() {
    const router = useRouter();
  },
  data: () => ({
    name: "",
    kira: "",
    isitma: "",
    odaSayisi: "",
    esyaDurumu: "",
    aciklama: "",
    balkonDurumu: "",
    ilan_image:""
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
          ilan_image:this.ilan_image
        })
        .then((res) => {
          
          console.log(res);
          if (res.status == 201) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "İlanınız onaylanması için gönderilmiştir.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style scoped>

</style>
