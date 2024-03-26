import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import Cabecalho from "./components/Cabecalho.vue";
import Formulario from "./components/Formulario.vue";
import ListaDeTarefas from "./components/ListaDeTarefas.vue";

const Application = createApp(App);
Application.component("cabecalho", Cabecalho);
Application.component("formulario", Formulario);
Application.component("listaDeTarefas", ListaDeTarefas);
Application.mount("#app");
