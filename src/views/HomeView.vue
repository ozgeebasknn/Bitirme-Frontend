<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-light bg-light navbar-expand-md fixed-top">
      <div class="container">
        <a class="navbar-brand" href="http://localhost:8080">ROOMMATE</a>
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
              class="navbar-nav px-4"
          >
            <li class="nav-item">
              <a
                  class="nav-link active"
                  href="#questions"
              >En Sık Sorulan Sorular</a
              >
            </li>
            <li class="nav-item">
              <a
                  class="nav-link active"
                  href="#contact"
              >İletişim</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
  <!--homeimg-->
  <section class="py-0 py-xl-5 bg-light">
    <homeimg></homeimg>
  </section>
  <!--homebanner-->
  <section class="py-0 py-xl-5">
    <homebanner></homebanner>
  </section>
  <section class="py-lg-16">
    <homeCard></homeCard>
  </section>
  <!---->
  <section class="py-lg-15 py-10 bg-light" id="questions">
    <homeAcardion></homeAcardion>
  </section>
  <!---->
  <!-- -->
  <section>
    <homeContact id="contact"></homeContact>
  </section>
  <footerVue />
</template>

<script>
import footerVue from "@/components/footer.vue";
import homebanner from "@/components/HomePage/homebanner.vue";
import homeimg from "@/components/HomePage/homeimg.vue";
import homeAcardion from "@/components/HomePage/homeAcardion.vue";
import homeContact from "@/components/HomePage/homeContact.vue";
import homeCard from "@/components/HomePage/homeCard.vue";
export default {
  components: {
    footerVue,
    homebanner,
    homeimg,
    homeAcardion,
    homeContact,
    homeCard
  },
  data: () => ({
    showP: false,
  }),
};
</script>

