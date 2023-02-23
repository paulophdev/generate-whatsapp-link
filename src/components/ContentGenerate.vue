<template>
  <div class="container-link">
    <h1 class="title-link">#paulophdev</h1>
    <div class="content-link">
      <FormGenerator v-if="$store.state.urlLinkWhatsapp === ''" />
      <FormDemo v-else />
    </div>
    <div class="icons-media">
      <a href="https://github.com/paulophdev" target="_blank"
        ><img src="../assets/github.svg" alt="Github"
      /></a>
      <a href="https://www.linkedin.com/in/paulophdev" target="_blank"
        ><img src="../assets/linkedin.svg" alt="Linkedin"
      /></a>
      <a href="https://www.instagram.com/paulophdev/" target="_blank"
        ><img src="../assets/instagram.png" alt="Instagram"
      /></a>
    </div>
  </div>
</template>

<script>
import FormDemo from "./FormDemo.vue";
import FormGenerator from "./FormGenerator.vue";

export default {
  components: {
    FormGenerator,
    FormDemo,
  },
};
</script>

<style scoped>
.container-link {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title-link {
  margin-bottom: 20px;
  text-transform: uppercase;
  font-style: italic;
  margin-top: 40px;
}

.content-link {
  background-color: #feefe5;
  border-radius: 10px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 350px;
  height: 350px;
}

.icons-media {
  margin-top: 40px;
}

.icons-media img {
  width: 32px;
}

.icons-media a {
  margin-right: 10px;
}
</style>
