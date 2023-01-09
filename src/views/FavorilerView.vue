<template>
 <layout-default>
      <favCard />
</layout-default>
</template>


<script>
import LayoutDefault from "../layouts/DefauldLayout.vue";

import favCard from "@/components/Card/FavoriCard.vue";
export default {
  components: { favCard,LayoutDefault },
  data: () => ({}),
};
</script>

<style scoped>
</style>
