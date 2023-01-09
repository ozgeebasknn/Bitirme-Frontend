<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <!-- <a class="navbar-item" href="http://localhost:8080/anasayfa">
        <img src="../assets/görseller/roommateBisquitNavbar.png"
      /></a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 position-absolute top-50 start-50 translate-middle">
        <li class="nav-item p-1">
            <router-link to="/admin/anasayfa" id="button">
                  <button type="button" class="btn ">
                    <strong>Onay Bekleyen İlanlar</strong>
                  </button>
                </router-link>
        </li>
        <li class="nav-item p-1">
            <router-link to="/onaylanmis" id="button">
                  <button type="button" class="btn ">
                    <strong>Onaylanmış İlanlar</strong>
                  </button>
                </router-link>
        </li>
  
        
      </ul>

    </div>
  </div>
</nav>
</template>

<style scoped>
img {
  width: 300px;
}
</style>