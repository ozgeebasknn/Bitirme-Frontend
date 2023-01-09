<template>
  <Navbar></Navbar>

  <!---->
  <section class="py-0 py-xl-5 bg-light">
    <homeimg></homeimg>
  </section>

  <!---->
  <section class="py-0 py-xl-5">
    <homebanner></homebanner>
  </section>

  <section class="py-lg-16">
    <homeCard></homeCard>
  </section>
  <!---->
  <section class="py-lg-15 py-10 bg-light">
   
    <homeAcardion></homeAcardion>
  </section>
  <!---->

  <!-- -->
  <section>
    <homeContact></homeContact>
  </section>
  <footerVue />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import footerVue from "@/components/footer.vue";
import homebanner from "@/components/HomePage/homebanner.vue";
import homeimg from "@/components/HomePage/homeimg.vue";
import homeAcardion from "@/components/HomePage/homeAcardion.vue";
import homeContact from "@/components/HomePage/homeContact.vue";
import homeCard from "@/components/HomePage/homeCard.vue";
export default {
  components: {
    Navbar,
    footerVue,
    homebanner,
    homeimg,
    homeAcardion,
    homeContact,
    homeCard
  },
};
</script>


<style scoped>



</style>

