<script setup>
import { reactive } from 'vue';

const propriedades = reactive({
    operacao: 0,
    valor1: 0,
    valor2: 0,
    resultado: 0
});

function calcular() {
    console.log("chegou ate aqui" + propriedades.operacao);
}

</script>

<template>
    <form>
        <div>
            <div>
                <input type="number" class="form-control" @change="(evento) => {
                    propriedades.valor1 = evento.target.value
                }" />
                <input type="number" class="form-control" @change="(evento) => {
                    propriedades.valor2 = evento.target.value
                }" />
            </div>
            <div class="dropdown">
                <select name="operacao" id="operacao" class="form-select btn btn-outline-info" @change="calcular">
                    <option @change="() => propriedades.operacao = 1" class="btn btn-primary">x</option>
                    <option @change="propriedades.operacao = 2" class="btn btn-secondary">/</option>
                    <option @change="propriedades.operacao = 3" class="btn btn-success">+</option>
                    <option @change="propriedades.operacao = 4" class="btn btn-danger">-</option>
                </select>
            </div>
            <button type="reset" class="btn btn-outline-warning">CLS</button>
        </div>
    </form>
    <h3>{{ propriedades.resultado }}</h3>
</template>