<template>
  <div :class="imageCSS">
    <img
      src="https://picsum.photos/seed/picsum/300/300"
      alt="Alt image text"
      style="width: 100%"
      width="300"
      height="300"
    />
  </div>
</template>

<script>
import { css } from "@emotion/css";

const imageCSS = css({
  width: 300,
  height: 300
});

export default {
  name: "CardImage",
  data() {
    return {
      imageCSS,
    };
  },
};
</script>
