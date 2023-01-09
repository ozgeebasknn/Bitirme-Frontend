<template>
  <div class="container">
    <div class="row g-4 mid">
      <!-- Counter item -->
      <div 
      v-for="item in items"
      :key="item.id"
      class="col-sm-6 col-xl-3"
      >
        <div
          class="
            d-flex
            mid
            p-4
            bg-opacity-15
            rounded-3
            box
          "
          :class="item.color"
        >
          <span class="display-6 lh-1 text-warning mb-0"
            ><i :class="item.icon "></i
          ></span>
          <div class="ms-4 h6 fw-normal mb-0">
            <div class="d-flex">
              <h5
                class="mb-0 fw-bold"
              >
                {{ item.number }}
              </h5>
            </div>
            <p class="mb-0">{{ item.p }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default ({
    data:()=>({
        items:[
            // {id:1,icon:"fas fa-tv",p:"Lorem1",number:"1000",color:"color1"},
            // {id:2,icon:"fas fa-user-tie",p:"Lorem1",number:"1000",color:"color2"},
            {id:3,icon:"fas fa-user-graduate",p:"Öğrenci",number:"6000+",color:"color1"},
            {id:4,icon:"fa-sharp fa-solid fa-house-user",p:"Ev",number:"2000+",color:"color4"},
        ]
    })    
})
</script>

<style scoped>
.color1{
    background: rgba(255, 171, 157, 0.5);
}
.color2{
    background: #FBC252;
}
.color3{
    background: #5BC0F8;
}
.color4{
    background: #B5D5C5;
}
</style>
