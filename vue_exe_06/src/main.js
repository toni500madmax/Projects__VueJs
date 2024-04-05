import { createApp } from "vue";
import App from "./App.vue";
import Cabecalho from "./components/Cabecalho.vue";
import Formulario from "./components/Formulario.vue";
import Resposta from "./components/Resposta.vue";

const Application = createApp(App);
Application.component("Cabecalho", Cabecalho);
Application.component("Formulario", Formulario);
Application.component("Resposta", Resposta);
Application.mount("#app");
