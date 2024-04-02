<script setup>
</script>
<template>
  <div id="carro">
    <div>
      <div class="carro-programacion">
        <img src="/src/assets/img/programacion.png" alt="programacion" />
      </div>
      <div>
        <img src="/src/assets/img/carro-deportivo.png" alt="carro" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes mover {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(95%);
  }
}
#carro {
  width: 100%;
  position:relative;

}
#carro > div{
  position: relative;
  top: 20px;
  animation: mover 6s linear infinite;
  -webkit-animation: mover 6s linear infinite;
  -moz-animation: mover 6s linear infinite;
  -o-animation: mover 6s linear infinite;
}
#carro .carro-programacion {
  position: relative;
  top: 26.5px;
  left: 5px;
}
#carro .carro-programacion img {
  width: 40px;
  height: 40px;
}
</style>