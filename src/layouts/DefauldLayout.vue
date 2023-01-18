<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <div class="pt-2">
        <img class="w-100 h-100" src="../assets/görseller/roommateWhite.png" />
      </div>

      <v-divider></v-divider>
      <ul>
        <h5>Eşya Durumu</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            
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
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            Eşyasız
          </label>
        </li>
      </ul>
      <ul>
        <h5>Balkon Durumu</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            
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
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            Balkonsuz
          </label>
        </li>
      </ul>
      <ul>
        <h5>Oda Sayısı</h5>
        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            2
          </label>
        </li>

        <li>
          <input
            class="form-check-input"
            type="checkbox"
            name="flexCheckDefault"
            
          />
          <label class="form-check-label" for="flexCheckDefault">
            1
          </label>
        </li>
      </ul>

      <template v-slot:append>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="User's Full Name"
          subtitle="Logged in"
        >
        </v-list-item>
        <div class="pa-2">
          <v-btn block> Logout</v-btn>
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
        </v-list>
      </div>
    </v-app-bar>

    <v-main class="vh bg-light">
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Anasayfa", icon: "mdi-home", to: "/anasayfa" },
      { title: "Favorilerim", icon: "mdi-heart", to: "favoriler" },
      { title: "İlan Ekle", icon: "mdi-book-multiple-outline", to: "ilanEkle" },
      { title: "Hesabım", icon: "mdi-clipboard-account-outline", to: "profil" },
    ],
  }),
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
