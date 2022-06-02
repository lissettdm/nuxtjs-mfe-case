<template>
  <p><button :class="buttonCSS" v-on:click="onClick">Add to Cart</button></p>
</template>

<script>
import { css } from "@emotion/css";

const buttonCSS = css({
  border: "none",
  outline: 0,
  padding: 12,
  color: "#EEEEEE",
  backgroundColor: "#222831",
  textAlign: "center",
  cursor: "pointer",
  width: "100%",
  fontSize: 18,
  ":hover": {
    opacity: 0.7,
  },
});

export default {
  name: "AddToCart",
  data() {
    return {
      buttonCSS,
    };
  },
  mounted() {
    console.log("mounted button");
  },
  methods: {
    onClick() {
      console.log("add to card");
    },
  },
};
</script>
