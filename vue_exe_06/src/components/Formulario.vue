<script setup>
const props = defineProps([ "value1", "value2", "operacao" ]);
</script>

<template>
    <div class="container formulario-container">
        <h2>Digite os valores e depois escolha a operação</h2>
        <form class="form">
            <div class="left">
                <div class="input-group mb-3">
                    <span class="input-group-text">Valor 1</span>
                    <input type="number" class="form-control" @keyup="props.value1">
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Valor 2</span>
                    <input type="number" class="form-control" @keyup="props.value2">
                </div>
            </div>
            <div class="right">
                <select class="form-select" @change="props.operacao">
                    <option selected>Operação</option>
                    <option value="*" selected>*</option>
                    <option value="/">/</option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                </select>
            </div>
        </form>
    </div>
</template>

<style scoped></style>