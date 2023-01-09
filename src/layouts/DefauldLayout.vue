<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" class="">
      <div class="pt-2">
        <a href="http://localhost:8080/">
          <img class="w-100 h-100" src="../assets/görseller/roommate.png"
        /></a>
      </div>

      <v-divider></v-divider>

      <template v-slot:append>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
          title="Kaan Baş"
          subtitle="Logged in"
        ></v-list-item>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
      <template> </template>
    </v-navigation-drawer>

    <v-app-bar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <div class="col-md-12">
        <v-list class="d-flex mid m-2 bg-color">
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
          >
            <div class="d-flex">
              <v-icon>{{ item.icon }}</v-icon>
              <b class="ml-2">{{ item.title }}</b>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-app-bar>

    <v-main class="vh bg-color">
      <slot/>
    </v-main>
  </v-app>
</template>
  
  <script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Anasayfa", icon: "mdi-home", to: "/" },
      { title: "Favorilerim", icon: "mdi-format-list-checks", to: "favoriler" },
      { title: "İlan Ekle", icon: "mdi-help-box", to: "ilanEkle" },
    ],
  }),
};
</script>

<style>
</style>