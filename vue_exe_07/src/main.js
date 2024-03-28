import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculadora from "./components/Calculadora.vue";

const Application = createApp(App);
Application.component("Calculadora", Calculadora);
Application.mount("#app");
