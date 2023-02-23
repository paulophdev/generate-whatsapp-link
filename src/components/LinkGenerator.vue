<template>
  <div class="container-generator">
    <div class="content-generator">
      <ContentGenerate />
    </div>
  </div>
</template>

<script>
import ContentGenerate from "./ContentGenerate.vue";

export default {
  components: {
    ContentGenerate,
  },
};
</script>

<style scoped>
.container-generator {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-generator {
  width: 100%;
  max-width: 400px;
}
</style>
