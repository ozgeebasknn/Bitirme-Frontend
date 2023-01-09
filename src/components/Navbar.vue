<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-light bg-light navbar-expand-md fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">ROOMMATE</router-link>
        <a
          class="navbar-toggler collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="showP = !showP"
        >
        <transition name="slide-up">
          <i v-if="showP" class="fa-solid fa-xmark animated bounce"></i>
          <i v-else  class="fa-sharp fa-solid fa-bars"></i>
        </transition>
        </a>
        

        <div class="navbar-collapse collapse justify-content-end" id="navbarCollapse">
          <ul
            v-for="item in items"
            :key="item.title"
            class="navbar-nav px-4"
          >
            <li class="nav-item">
              <a
                :to="item.to"
                class="nav-link router-link-active"
                >{{ item.title }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Anasayfa",  to: "/" },
      { title: "İletişim",  to: "iletisim" },
      { title: "İlan Ekle", to: "ilanEkle" },
    ],
    showP: false,
  }),
  methods:{

  }
};
</script>

<style scoped>
nav .nav-link:hover,
nav li:active{
  background-color: #DDBEAA;
  cursor: pointer;
}
.router-link-active:active {
  color: #DDBEAA;
  cursor: pointer;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(60px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>