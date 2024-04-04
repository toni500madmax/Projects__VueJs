<script setup>
const props = defineProps([ "num1", "num2", "resultado" ])
</script>

<template>
    <span v-if="props.num1 && props.num2 !== ''">
        <h2>Resultado: {{ props.resultado }}</h2>
    </span>
    <span v-else-if="props.num1 || props.num2 === ''">
        <h2>Digite os valores</h2>
    </span>
</template>

<style scoped>
span h2 {
    padding-bottom: 40px;
}
</style>