<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import ListaDeTarefas from './components/ListaDeTarefas.vue';

const estado = reactive({
  filtro: "todas",
  tarefaTemp: '',
  tarefas: [
    {
      titulo: 'Estudar ES6+',
      finalizada: false
    },
    {
      titulo: 'Ir para academia',
      finalizada: true
    },
    {
      titulo: 'Estudar SASS',
      finalizada: false
    }
  ],
});

const getTarefasPendentes = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada === false)
}

const getTarefasFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada === true)
}

const getTarefasFiltradas = () => {
  const { filtro } = estado;
  switch (filtro) {
    case 'pendentes':
      return getTarefasPendentes();
    case 'finalizadas':
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
  }
}

const novaTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizada: false
  }
  estado.tarefas.push(tarefaNova);
  estado.tarefaTemp = '';
}
</script>

<template>
  <Cabecalho :tarefas-pendentes="getTarefasPendentes().length" />
  <Formulario :muda-filtro="evento => estado.filtro = evento.target.value" :tarefa-temp="estado.tarefaTemp"
    :edita-tarefa-temp="evento => estado.tarefaTemp = evento.target.value" :nova-tarefa="novaTarefa()" />
  <ListaDeTarefas :tarefas="getTarefasFiltradas()" />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.container {
  width: min(100%, 940px);
  margin-inline: auto;
}

.done {
  text-decoration: line-through;
}
</style>
