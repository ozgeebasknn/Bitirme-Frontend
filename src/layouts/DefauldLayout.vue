<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <div class="pt-2">
        <img class="w-100 h-100" src="../assets/görseller/roommateWhite.png" />
      </div>

      <v-divider></v-divider>

      <!-- <div>
    <div>
     
      <label for="isitma">Isıtma:</label>
      <input v-model="isitma" type="text" id="isitma" name="isitma">
      <label for="odaSayisi">Oda Sayisi:</label>
      <input v-model="odaSayisi" type="text" id="odaSayisi" name="odaSayisi">
      <label for="esyaDurumu">Esya Durumu:</label>
      <input v-model="esyaDurumu" type="text" id="esyaDurumu" name="esyaDurumu">
      <label for="balkonDurumu">Balkon Durumu:</label>
      <input v-model="balkonDurumu" type="text" id="balkonDurumu" name="balkonDurumu">
      <button v-on:click="getIlanlar()">Filtrele</button>
    </div>
    <div v-for="ilan in ilanlar" :key="ilan._id">
      
      
      <p>{{ ilan.isitma }}</p>
      <p>{{ ilan.odaSayisi }}</p>
      <p>{{ ilan.esyaDurumu }}</p>
      <p>{{ ilan.balkonDurumu }}</p>
    </div>
  </div> -->
      <ul>
        <h5>Eşya Durumu</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="eşyalı"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Eşyalı
          </label>
        </li>

        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="eşyasız"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Eşyasız
          </label>
        </li>
      </ul>
      <v-divider></v-divider>
      <ul>
        <h5>Balkon Durumu</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="balkonlu"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Balkonlu
          </label>
        </li>

        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="balkonsuz"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Balkonsuz
          </label>
        </li>
      </ul>
      <v-divider></v-divider>
      <ul>
        <h5>Oda Sayısı</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="2"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault"> 2 </label>
        </li>

        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="1"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault"> 1 </label>
        </li>
      </ul>
      <v-divider></v-divider>
      <ul>
        <h5>Isıtma</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="doğalgaz"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault"> Doğalgaz </label>
        </li>

        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            value="klima"
            @input="updateSelection"
          />
          <label class="form-check-label" for="flexCheckDefault"> Klima </label>
        </li>
      </ul>

      <template v-slot:append>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Hoşgeldin"
          subtitle="Logged in"
        >
        </v-list-item>
        <div class="pa-2">
          <router-link to="/"><v-btn block> Logout</v-btn></router-link>
          
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <div class="col-md-12">
        <v-list class="d-flex mid" nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            rounded="xl"
            active-color="primary"
          >
            <div class="d-flex">
              <v-icon>{{ item.icon }}</v-icon>
              <b class="ml-2">{{ item.title }}</b>
            </div>
          </v-list-item>

          <button type="button" class="btn btn-outline-light" @click="git()">
            <v-icon>mdi-book-multiple-outline</v-icon>
              <b class="ml-2">Hesabım</b>
          </button>
        </v-list>
      </div>
    </v-app-bar>

    <v-main class="vh bg-light">
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";

import { URL } from "../utilty/config";
export default {
  data: () => ({
    ilanlar: [],
      kira: '',
      isitma: '',
      odaSayisi: '',
      esyaDurumu: '',
      balkonDurumu: '',
    selectedFeatures: [],
    drawer: null,
    user: reactive({}),
    user: [],
    items: [
      { title: "Anasayfa", icon: "mdi-home", to: "/anasayfa" },
      { title: "Favorilerim", icon: "mdi-heart", to: "favoriler" },
      { title: "İlan Ekle", icon: "mdi-book-multiple-outline", to: "ilanEkle" },
    ],
  }),

  // computed:{
  //   filteredProperties(){
  //     return this.ilanlar.filter(property=>{
  //       for(let feature of this.selectedFeatures){
  //         if(!property.features.includes(feature)){
  //           return false;
  //         }console.log(this.filteredProperties)
  //       } return true;
  //     })
  //   }
    

  // },
  computed: {
    filteredProperties() {
      // Kullanıcının seçtiği özelliklere göre ev ilanı özelliklerini filtrele
      return this.ilanlar.filter(property => {
        for (let feature of this.selectedFeatures) {
          if (!property.features.includes(feature)) {
            return false;
          }
        }
        return true;
      });
    },
  },
  methods: {
    updateSelection(feature) {
      // Kullanıcının seçimini güncelle
      if (this.selectedFeatures.includes(feature)) {
        this.selectedFeatures = this.selectedFeatures.filter(f => f !== feature);
      } else {
        this.selectedFeatures.push(feature);
      }
    },
    // filterGet(){
    //   axios.get(URL+""+"?token="+12345+"&isi="+"var")
    // },
    getAds() {
      axios
        .get(URL + "users/projects")
        .then((response) => {
  
          this.user = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    git() {
      this.$router.push("/profil/" + this.user[0].user_id._id);
    },

    getIlanlar() {
      axios
        .get(URL+'projects/filtreli', {
          params: {
            isitma: this.isitma,
            odaSayisi: this.odaSayisi,
            esyaDurumu: this.esyaDurumu,
            balkonDurumu: this.balkonDurumu,
          },
        })
        .then(response => {
          this.ilanlar = response.data;
          console.log(this.ilanlar)
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted(){
    this.getAds();
  },

};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
