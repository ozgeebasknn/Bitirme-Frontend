<template>
  <div class="container">
    <div class="row">
      <div class="offset-lg-2 col-lg-6 col-12">
        <div class="mb-8 pe-lg-14">
          <!-- heading  -->
          <h2 class="pe-lg-12 mb-4 h1 fw-semi-bold">En sık sorulan sorular</h2>
          <p class="lead">
            İşte daha önce kontrol edebileceğiniz en sık sorulan sorular
            başlarken
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-lg-2 col-lg-8 col-12">
        <!-- accordions  -->
        <div class="accordion accordion-flush" id="accordionExample">
          <div class="border p-3 rounded-3 mb-2" id="headingOne">
            <h3 class="mb-0 fs-4">
              <a
                href="#"
                class="d-flex align-items-center text-inherit text-decoration-none active collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <span class="me-auto">İlanları nasıl görüntüleyebilirim?</span>
                <span class="collapse-toggle ms-4">
                  <i class="fa fa-chevron-down text-muted"></i>
                </span>
              </a>
            </h3>
            <!-- collapse  -->
            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style=""
            >
              <div class="pt-2">
                İlanları görüntüleyebilmek için ilk önce kayıt olmanız
                gerekmektedir.
              </div>
            </div>
          </div>
          <!-- Card  -->
          <!-- Card header  -->
          <div class="border p-3 rounded-3 mb-2" id="headingTwo">
            <h3 class="mb-0 fs-4">
              <a
                href="#"
                class="d-flex align-items-center text-inherit text-decoration-none collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <span class="me-auto"> Nasıl ilan ekleyebilirim? </span>
                <span class="collapse-toggle ms-4">
                  <i class="fa fa-chevron-down text-muted"></i>
                </span>
              </a>
            </h3>
            <!-- collapse  -->
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style=""
            >
              <div class="pt-3">
                Kayıt olup daha sonra da giriş yaptıktan sonra karşınıza çıkan
                "İlan Ekle" butonuna tıklayara ilanınızı ekleyebilirsiniz.
              </div>
            </div>
          </div>
          <!-- Card  -->
          <!-- Card header  -->
          <div class="border p-3 rounded-3 mb-2" id="headingThree">
            <h3 class="mb-0 fs-4">
              <a
                href="#"
                class="d-flex align-items-center text-inherit text-decoration-none active collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <span class="me-auto">
                  İlan ekledim ama yayınlanmadı, neden?
                </span>
                <span class="collapse-toggle ms-4">
                  <i class="fa fa-chevron-down text-muted"></i>
                </span>
              </a>
            </h3>
            <!-- collapse  -->
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="pt-3">
                İlanınızı ekledikten sonra ilan bilgileriniz sitemizin adminine
                gönderilir. İlanınızda onaylanmasına engel bilgiler yoksa
                ilanınız onaylanır ve anasayfada yayınlanır.
              </div>
            </div>
          </div>
          <!-- Card  -->
          <!-- Card header  -->
          <div class="border p-3 rounded-3 mb-2" id="headingFour">
            <h3 class="mb-0 fs-4">
              <a
                href="#"
                class="d-flex align-items-center text-inherit text-decoration-none active collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <span class="me-auto">
                  Beğendiğim ilanları daha sonra görüntüleyebilir miyim?
                </span>
                <span class="collapse-toggle ms-4">
                  <i class="fa fa-chevron-down text-muted"></i>
                </span>
              </a>
            </h3>
            <!-- collapse  -->
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="pt-3">
                Evet, beğendiğiniz ilanları favorilerinize ekleyerek daha sonra
                favorilerim butonuna tıklayarak görüntüleyebilirsiniz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
span {
  color: #000;
}
</style>
