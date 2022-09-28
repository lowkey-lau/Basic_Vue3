<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import $axios from "./axios/index.js";

export default {
  setup() {
    const $store = useStore();
    const state = reactive({});

    onMounted(() => {});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss"></style>
