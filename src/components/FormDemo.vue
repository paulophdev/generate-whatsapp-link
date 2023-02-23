<template>
  <div class="content-demo">
    <div class="content-msg">
      <p class="form-label">
        Seu link está logo abaixo, e já está copiado para sua área de
        transferência, mas é possível copiar novamente clicando no botão da
        direita.
      </p>
    </div>
    <div>
      <input class="form-input" v-model="url" readonly id="urlLink" />
    </div>
    <div class="demo-buttons">
      <div>
        <button class="form-button" @click="newLink">Gerar Outro</button>
      </div>
      <div>
        <button class="form-button" @click="copyText">Copiar Link</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const url = ref(store.state.urlLinkWhatsapp);

    function newLink() {
      store.commit("clearUrlLinkWhatsapp");
    }

    function copyUrl() {
      const input = document.getElementById("urlLink");
      input.select();
      document.execCommand("copy");
    }

    function copyText() {
      copyUrl();
      toast.success("Link Copiado!", {
        autoClose: 1000,
      });
    }

    onMounted(() => {
      copyUrl();
    });

    return {
      url,
      newLink,
      copyText,
    };
  },
};
</script>

<style>
.content-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}

.demo-buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
