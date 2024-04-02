<script setup>
import { ref, onMounted } from "vue";
const divRef = ref(null);
const anchoVentana = window.innerWidth - 60;

// generar en un lado aleatorio
onMounted(() => {
  for (let i = 0; i < 13; i++) {
    const divHijo = document.createElement("div");
    const x = Math.floor(Math.random() * anchoVentana);
    const y = Math.floor(Math.random() * (60-50+1)+50);
    divHijo.style.left = `${x}px`;
    divHijo.style.top = `${y}px`;
    divHijo.classList.add("div-burbuja");
    divRef.value.appendChild(divHijo);
  }
});
</script>

<template>
  <div class="content-burbuja">
    <div class="burbujas" ref="divRef"></div>
  </div>
</template>

<style>
.content-burbuja{
  filter: blur(5px);
}
.div-burbuja {
  width: 60px;
  height: 60px;
  padding: 25px;
  border-radius: 50%;
  border: 2px solid #00825a;
  position: relative;
  overflow: hidden;
  animation: bajar 2s linear infinite;
  -webkit-animation: bajar 2s linear infinite;
  -moz-animation: bajar 2s linear infinite;
  -o-animation: bajar 2s linear infinite;
}
@media screen and (max-width: 860px) {
  .div-burbuja {
    width: 50px;
    height: 50px;
  }
}
@keyframes bajar {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
<style scoped>
.content-burbuja {
  padding-top: 10vh;
  height: 100vh;
  overflow: hidden;
}
</style>