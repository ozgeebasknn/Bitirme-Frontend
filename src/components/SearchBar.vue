<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav me-auto mb-2 mb-lg-0 position-absolute top-0 end-0 mt-2"
        >
          <li class="nav-item">
            <select class="form-select" aria-label="Default select example">
              <option selected>Isıtma</option>
              <option value="1">Doğalgaz</option>
              <option value="2">Klima</option>
            </select>
          </li>
          <li class="nav-item">
            <select class="form-select" aria-label="Default select example">
              <option selected>Eşyalı</option>
              <option value="1">Evet</option>
              <option value="2">Hayır</option>
            </select>
          </li>
          <li class="nav-item">
            <select class="form-select" aria-label="Default select example">
              <option selected>Oda</option>
              <option value="1">1+1</option>
              <option value="2">2+1</option>
              <option value="2">2+0</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
