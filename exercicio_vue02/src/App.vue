<script setup>
import { reactive } from 'vue';

const estado = reactive({
  filtro: "todas",
  tarefaTemp: '',
  tarefas: [
  ]
});

const addTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizada: false
  }

  estado.tarefas.push(tarefaNova);
  estado.tarefaTemp = '';
}

const getPendentes = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizada);
};

const getFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada);
};

const getFiltragem = () => {
  const filtro = estado.filtro;
  switch (filtro) {
    case "pendentes":
      return getPendentes();
    case 'finalizadas':
      return getFinalizadas();
    default:
      return estado.tarefas;
  }
}
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minhas tarefas</h1>
      <p>Voce possui {{ getPendentes().length }} tarefas</p>

    </header>
    <form @submit.prevent="addTarefa">
      <div class="row" style="align-items: center; justify-content: center;">
        <div class="col-7">
          <input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" required
            type="text" class="form-control" placeholder="Digite o nome da tarefa">
        </div>
        <div class="col-2 ms-2">
          <button type="submit" class="btn btn-primary ps-2 pe-2">Cadastrar</button>
        </div>
        <div class="col-2">
          <select class="form-control" @change="event => estado.filtro = event.target.value">
            <option value="todas">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="finalizadas">Finalizadas</option>
          </select>
        </div>
      </div>
    </form>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="tarefa in  getFiltragem() ">
        <input @change="evento => tarefa.finalizada = evento.target.checked" class="m-1 ms-2" type="checkbox"
          :checked="tarefa.finalizada" :id="tarefa.titulo">
        <label :class="{ done: tarefa.finalizada }" class="ms-3" :for="tarefa.titulo">
          {{ tarefa.titulo }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: normal;
  list-style: none;
}

.container {
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  color: black;
}

.done {
  text-decoration: line-through;
  color: rgb(124, 124, 124);
}
</style>
