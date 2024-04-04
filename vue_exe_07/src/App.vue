<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Operacoes from './components/Operacoes.vue';
import Resultado from './components/Resultado.vue';

const estado = reactive({
  // O operation receberá a mudança da operação. Por padrão pode-se usar o calculo de soma
  operation: "+",
  num1: "",
  num2: "",
})

const printResult = () => {
  const { operation, num1, num2 } = estado;
  switch (operation) {
    case '-':
      return (parseFloat(num1) - parseFloat(num2));
    case '*':
      return (parseFloat(num1) * parseFloat(num2));
    case '/':
      return (parseFloat(num1) / parseFloat(num2));
    default:
      return (parseFloat(num1) + parseFloat(num2));
  }
}
</script>

<template>

  <body>
    <div class="container">
      <Cabecalho />
      <Operacoes :operacao="evento => estado.operation = evento.target.value"
        :num1="evento => estado.num1 = evento.target.value" :num2="evento => estado.num2 = evento.target.value" />
      <Resultado :num1="estado.num1" :num2="estado.num1" :resultado="printResult()" />
    </div>
  </body>
</template>

<style scoped></style>
