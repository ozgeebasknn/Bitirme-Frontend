<template>
  <div class="card-group">
    <div class="grid">
      <div class="card item">
        <img src="https://via.placeholder.com/150x100" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "favCard",
  props: ["fav"],
};
</script>
  
<style scoped>
/* Card  */
.grid {
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 20px;
  row-gap: 20px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
}
.card {
  border-radius: 20px;
}
img{
  border-radius: 15px;
}
.card .item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.item:hover {
  transform: scale(0.95);
  transition: all 0.4s;
}
</style>