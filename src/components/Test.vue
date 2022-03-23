
<template>
  <div>
    <h1>数字{{ hello.count }}</h1>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const hello = reactive({
  count: 1,
});
</script>

<style scoped>
</style>