<template>
  <div :class="cardCSS">
    <CardImage />
    <h1>Product Name</h1>
    <PriceText />
    <AddToCart />
  </div>
</template>

<script>
import { css } from "@emotion/css";
import PriceText from "./components/PriceText.vue";
import CardImage from "./components/CardImage.vue";
import AddToCart from "../Buttons/AddToCart/AddToCart.vue";

const cardCSS = css({
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  maxWidth: 300,
  margin: "auto",
  textAlign: "center",
  fontFamily: "arial",
});

const imageCSS = css({
  height: "70%",
});

export default {
  name: "BaseCard",
  components: {
    PriceText,
    AddToCart,
    CardImage,
  },
  data() {
    return {
      cardCSS,
      imageCSS,
    };
  },
};
</script>
