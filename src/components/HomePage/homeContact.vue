<template>
        <div class="container col-xxl-8 px-4">
      <div class="row flex-lg-row-reverse mid g-5">
        <div class="col-lg-6 py-7">
          <h1 class="display-5 fw-bold lh-1 mb-3">İletişim</h1>
          <p class="lead">
            Bizimle iletişime geçebilirsin!
          </p>
          <div class="py-2">
            <div class="form-outline">
              <v-text-field
                variant="outlined"
                label="Mail Adresiniz"
              ></v-text-field>
            </div>
            <div class="form-outline mt-2">
              <v-textarea label="Açıklamanız" variant="outlined"  ></v-textarea>
            </div>
            <div class="text-end">
              <button class="cta">
                <span>Gönder</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="col-10 col-sm-8 col-lg-6 py-xl-5">
          <img
            src="@/assets/görseller/loginLogo.png"
            class="d-block mx-lg-auto img-fluid"
            width="700"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
    </div>
</template>

<style scoped>


</style>