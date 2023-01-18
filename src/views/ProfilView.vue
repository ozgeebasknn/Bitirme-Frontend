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
        <v-text-field label="İsim" variant="outlined" clearable v-model="user.first_name "></v-text-field>
        <v-text-field label="Soyisim" variant="outlined" clearable v-model="user.last_name "></v-text-field>
        <v-text-field label="Email" variant="outlined" clearable v-model="user.email"></v-text-field>
        <!-- <v-text-field label="Şifre" variant="outlined" clearable v-model="user.password"></v-text-field> -->
       
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>

        <button class="cta" @click="updateUser()">
          <span>Güncelle</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </v-card-actions>
    </v-card>
    <router-link to="/userIlan"> <button >İlanlarım</button></router-link>
   

</layout-default>
</template>
<script>
import { useRouter } from "vue-router";
import LayoutDefault from "../layouts/DefauldLayout.vue";
import axios from "axios";
import { reactive } from "vue";
import { URL } from "../utilty/config";
export default {
  name:"profil",
  components: {
    LayoutDefault,
  },
  setup() {
    const router = useRouter();
  },

  data: () => ({
    user: reactive({}),
  }),
  created() {
    axios .get(URL + "users/" + `${this.$route.params.id}`).then((response) => {
      this.user = response.data;
    });
  },
  methods: {
  
    updateUser() {
      axios
        .patch(URL + "users", {
          first_name:this.user.first_name,
          last_name:this.user.last_name,
          email: this.user.email,
          password: this.user.password,
        })
        .then((res) => {
          console.log(res);
        });
    },
    // sifreSifirla(){
    //   axios.post(URL+"users/change-password" ).then((resp)=>{
    //     console.log(resp)
    //   })
    // }
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
