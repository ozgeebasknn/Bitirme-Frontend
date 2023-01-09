<template>
    <div>
      <NavbarCompVue>
        <main class="main">
           <slot></slot> 
        </main>
      </NavbarCompVue>
    </div>
  </template>
  
  <script>
import NavbarCompVue from '@/components/NavbarComp.vue';
  export default {
    components: {
        NavbarCompVue,
    },
  };
  </script>
  