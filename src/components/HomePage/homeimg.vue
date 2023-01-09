<template>
  <div class="container col-xxl-8 px-4">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6 py-xl-5">
        <img
          src="@/assets/görseller/loginLogo.png"
          class="d-block mx-lg-auto img-fluid"
          width="700"
          height="400"
          loading="lazy"
        />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Roommate</h1>
        <p class="lead">
          Evin var ama ev arkadaşın mı yok? Yoksa hem evin hem de beraber kalabileceğin bir ev arkadaşına 
          mı sahip değilsin? Korkma! İstersen ev arkadaşı arayışında olduğunun ilanını paylaşıp insanların seninle
          iletişime geçmesini bekleyebilirsin. İstersen yayınlanan ilanların içinde sana uygun olanını bulup
          yeni ev arkadaşınla iletişime geçebilirsin. Sen de bir hesap oluştur ve aramıza katıl!
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button class="cta" @click="login()">
            <span>Giriş</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <button class="cta" @click="record()">
            <span>Kayıt Ol</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  methods:{
    login(){
      this.$router.push("/giris")
    },
    record(){
      this.$router.push("/kayit")
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 769px){
    .py-5{
        margin-top: 10px;
        justify-content: center;
    }
}
@media screen and (min-width: 1024px){
    .py-5{
        margin-top: 10px;
        justify-content: center;
    }
}
@media screen and (max-width: 800px){
    
    .py-5{
        margin-top: 10px;
        justify-content: center;
    }
}
</style>