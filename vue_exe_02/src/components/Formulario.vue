<script setup>
const props = defineProps([ 'novaTarefa', 'tarefaTemp', 'mudaFiltro', 'editaTarefaTemp' ]);
</script>

<template>
    <form @submit.prevent="props.novaTarefa">
        <div class="row">
            <div class="col-md-7">
                <input :value="props.tarefaTemp" @change="props.editaTarefaTemp" required type="text"
                    placeholder="Digite a descrição da tarefa" class="form-control">
            </div>
            <div class="col-md-2">
                <button type="submit" class="btn btn-primary ps-1 pe-1">Enviar</button>
            </div>
            <div class="col-md-2">
                <select @change="props.mudaFiltro" class="form-control">
                    <option value="todas">Todas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizadas">Finalizadas</option>
                </select>
            </div>
        </div>
    </form>
</template>