<script setup>
import { reactive } from "vue";

import "./styles.css"

const estado = reactive({
  operation: "*",
  value1: '',
  value2: ''
});

const printResult = () => {
  const { operation, value1, value2 } = estado;
  switch (operation) {
    case '/':
      return (parseFloat(value1) / parseFloat(value2));
    case '+':
      return (parseFloat(value1) + parseFloat(value2));
    case '-':
      return (parseFloat(value1) - parseFloat(value2));
    default:
      return (parseFloat(value1) * parseFloat(value2));
  }
}
</script>

<template>
  <Cabecalho />
  <Formulario :value1="event => estado.value1 = event.target.value"
    :value2="event => estado.value2 = event.target.value" 
    :operacao="event => estado.operation = event.target.value" />
  <Resposta :value1="estado.value1" :value2="estado.value2" 
  :resultado="printResult()" />
</template>

<style scoped></style>
