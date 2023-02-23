<template>
  <div class="form">
    <div>
      <label for="phone" class="form-label"
        >1. Insira o número do Whatsapp *</label
      ><br /><br />
      <input
        v-model="data.phone"
        id="phone"
        v-mask="'(##) #####-####'"
        placeholder="(##) #####-####"
        class="form-input"
      />
    </div>
    <div>
      <label for="message" class="form-label"
        >2. Crie uma mensagem personalizada <small>(opcional)</small></label
      ><br /><br />
      <input
        v-model="data.message"
        id="message"
        placeholder="mensagem aqui..."
        class="form-input"
      />
    </div>
    <div>
      <button
        @click="generateLink"
        title="Clique aqui para gerar seu link do Whatsapp."
        class="form-button"
      >
        Gerar Link
        <span v-if="data.loading"
          ><img src="../assets/gifs.gif" alt="Gerando Link" style="width: 15px"
        /></span>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const data = ref({
      phone: "",
      message: "",
      loading: false,
    });

    const alterLoading = () => {
      data.value.loading = !data.value.loading;
    };

    const generateLink = async () => {
      alterLoading();
      await new Promise(() => {
        const cleanedPhoneNumber = data.value.phone
          .replace(/\D+/g, "")
          .replace(/\s+/g, "");

        if (cleanedPhoneNumber.length <= 0) {
          toast.error("O número é obrigatório.", {
            autoClose: 1000,
          });
          alterLoading();
          return false;
        }

        if (cleanedPhoneNumber.length < 10 || cleanedPhoneNumber.length > 11) {
          toast.error("O número não é válido.", {
            autoClose: 1000,
          });
          alterLoading();
          return false;
        }
        setTimeout(() => {
          const text = data.value.message.trim()
            ? `?text=${data.value.message.trim().replace(/\s+/g, "%20")}`
            : "";

          const url = `https://wa.me/` + cleanedPhoneNumber + text;
          toast.success("Link Gerado e Copiado!", {
            autoClose: 1000,
          });

          data.value.phone = "";
          data.value.message = "";
          alterLoading();

          store.commit("setUrlLinkWhatsapp", url);
        }, 1000);
      });
    };

    return {
      data,
      generateLink,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
}
</style>
