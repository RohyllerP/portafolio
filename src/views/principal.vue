<script setup>
import { ref,onMounted } from "vue";
import burbujasVue from "@/components/burbujas/burbujas.vue";
import navbarVue from "@/components/navbar/navbar-index.vue";
import headerVue from "@/components/header/index.vue";
import accionesVue from "@/components/acciones/index.vue";

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
})

</script>

<template>
      
  <div id="app" ref="app">
   
    <navbarVue />
 
    <burbujasVue />
   
    <accionesVue />
   
  </div>
  <div class="hidden header">
        <headerVue />
    </div>
    
</template>

<style scoped>
.header{
  position: absolute;
  top: 0px;
}
#app{
  width: 100%;
  height: 100vh;
  background-color: #111827;
}
.hidden{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 1s;
}
.show{
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

</style>
