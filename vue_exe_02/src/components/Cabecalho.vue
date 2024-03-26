<script setup>
const props = defineProps([ 'tarefasPendentes' ]);
</script>

<template>
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
        <div class="container">
            <h1>Minhas tarefas</h1>
            <p>Possui {{ props.tarefasPendentes }} tarefas pendentes</p>
        </div>
    </header>
</template>