<script setup>
import { reactive } from 'vue';
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
  <header class="p-5 mb-4 mt-4 bg-light rounded-3">
    <div class="container">
      <h1>Minhas tarefas</h1>
      <p>Possui {{ getTarefasPendentes().length }} tarefas pendentes</p>
    </div>
  </header>
  <form @submit.prevent="novaTarefa">
    <div class="row">
      <div class="col-md-7">
        <input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" required
          type="text" placeholder="Digite a descrição da tarefa" class="form-control">
      </div>
      <div class="col-md-2">
        <button type="submit" class="btn btn-primary ps-1 pe-1">Enviar</button>
      </div>
      <div class="col-md-2">
        <select @change="evento => estado.filtro = evento.target.value" class="form-control">
          <option value="todas">Todas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>
    </div>
  </form>
  <ul class="list-group mt-4">
    <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
      <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada"
        :id="tarefa.titulo" type="checkbox">
      <label :class="{ done: tarefa.finalizada === true }" class="ms-3" :for="tarefa.titulo">
        {{ tarefa.titulo }}
      </label>
    </li>
  </ul>
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
