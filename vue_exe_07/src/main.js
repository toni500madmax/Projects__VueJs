import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Cabecalho from "./components/Cabecalho.vue";

const Application = createApp(App);
Application.component("Cabecalho", Cabecalho);
Application.mount("#app");
