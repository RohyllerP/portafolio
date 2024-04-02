<script setup>
import { ref, onMounted } from "vue";
import formulario from "./formulario.vue";
import burbujas from "@/components/burbujas/burbujas.vue";
</script>

<template>
    <div id="appFormulario">
        <formulario />
        <burbujas />
    </div>
</template>
<style scoped>
#appFormulario {
    height: 100vh;
    background-color: #111827;
}
</style>