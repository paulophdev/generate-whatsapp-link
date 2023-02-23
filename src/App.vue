<template>
  <div>
    <LinkGenerator />
  </div>
</template>

<script>
import LinkGenerator from "./components/LinkGenerator.vue";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  components: {
    LinkGenerator,
  },
};
</script>
<style>
*,
*:after,
*:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  text-decoration: none;
}

.form-button {
  height: 40px;
  width: 100px;
  border-radius: 50px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #34af23;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.form-input {
  height: 50px;
  width: 300px;
  border-radius: 50px;
  border: none;
  padding: 0 5px 0 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}

.form-label {
  color: #423939;
  width: 100%;
}
</style>
