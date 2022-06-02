<template>
  <div>
    <Header />
    
    <MFEContainer :src="'http://localhost:5001'" />
    <main style="margin-top: 30px">
      <MFEContainer :src="'http://localhost:5000'" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
