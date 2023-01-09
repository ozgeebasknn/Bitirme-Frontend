<template>
  <layout-default>
        <div class="container">
          <IlanComp :total-items="totalItems" :items-per-page="itemsPerPage" />
          <div class="">
            <pagination
              :total-items="totalItems"
              :items-per-page="itemsPerPage"
            />
          </div>
        </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../layouts/DefauldLayout.vue";
import IlanComp from "../components/IlanComp.vue";
import Pagination from "../components/Pagination.vue";
import axios from "axios";
import { URL } from "../utilty/config";

export default {
  name: "anaSayfa",
  components: {
    IlanComp,
    Pagination,
    LayoutDefault,
  },
  // async created(){
  //   const response = await axios.get(URL+'projects',{
  //     // headers:{
  //     //   Authorization:'Bearer' + localStorage.getItem('jwt')
  //     // }
  //   })

  // },
  data() {
    return {
      totalItems: 50,
      itemsPerPage: 10,
    };
  },
};
</script>

<style>
.vh {
  min-height: 100vh;
}
.mid {
  place-content: center;
}
</style>
