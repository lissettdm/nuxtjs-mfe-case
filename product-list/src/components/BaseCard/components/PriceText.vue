<template>
  <p class="price">$19.99</p>
</template>

<script>
import { css } from "@emotion/css";

const priceCSS = css({
  color: "grey",
  fontSize: 22,
});

export default {
  name: "PriceFormatter",
  data() {
    return {
      priceCSS,
    };
  },
};
</script>
