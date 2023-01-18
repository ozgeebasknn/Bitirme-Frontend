<template>
    <section class="vh" style="background-color:#DDBEAA">
      <admin-navbar></admin-navbar>
      <div class="container h-200">
        
        <IlanAdmin :total-items="totalItems" :items-per-page="itemsPerPage"/>
        <div class="row mid"> 
        <pagination :total-items="totalItems"  :items-per-page="itemsPerPage" />
      </div>
      </div>
    </section>
  </template>
  
  <script>
  import IlanAdmin from "@/components/Admin/IlanAdmin.vue";
  import Pagination from "@/components/Pagination.vue";
  import AdminNavbar from "@/components/Admin/AdminNavbar.vue";
  import axios from "axios";
  // import { URL } from "../utilty/config";
  
  export default {
    name:'adminAnasayfa',
    components: {
      IlanAdmin,
      Pagination,
      AdminNavbar
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
  .vh{
    min-height: 100vh;
  }
  .mid{
    place-content: center;
  }
  </style>
  