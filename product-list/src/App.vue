<template>
  <div :class="containerCSS">
    <BaseCard v-for="n in 50" :key="n"></BaseCard>
  </div>
</template>

<script>
import { css } from "@emotion/css";
import BaseCard from "./components/BaseCard/BaseCard.vue";

const containerCSS = css({
  display: "flex",
  flexWrap: "wrap",
});

export default {
  name: "App",
  components: {
    BaseCard,
  },
  data() {
    return { containerCSS };
  },
};
</script>
