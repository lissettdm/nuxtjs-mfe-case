<template>
  <div v-html="html" ref="container"></div>
</template>
<script lang="ts">
import Vue from "vue";

interface Props {
  src: string;
}

interface Data {
  html: string;
  main: string;
}

export default Vue.extend<Data, {}, {}, Props>({
  name: "MFEContainer",
  props: {
    src: String,
  },
  data() {
    return {
      html: "",
      main: "",
    };
  },
  mounted() {
    import(/* webpackIgnore: true */ `${this.src}${this.main}`).then(
      (_module) => {
        _module.default(this.$refs.container);
      }
    );
  },
  async fetch() {
    const { html, main } = await fetch(this.src).then((res) => res.json());
    this.html = html;
    this.main = main;
  },
  // head() {
  //   return {
  //     script: [{ src: `${this.src}${this.main}`, type: "module" }],
  //   };
  // },
  fetchOnServer: true,
});
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
