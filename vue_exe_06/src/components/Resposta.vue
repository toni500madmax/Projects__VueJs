<script setup>
const props = defineProps([ "value1", "value2", "resultado" ])
</script>

<template>
    <div class="container resposta-container">
        <h2>Resultado: </h2>
        <h3 v-if="props.value1 && props.value2 !== ''" class="resposta-resposta">{{ props.resultado }}</h3>
        <h3 v-else-if="props.value1 || props.value2 === ''" class="resposta-resposta">
            --esperando valores--
        </h3>
    </div>
</template>