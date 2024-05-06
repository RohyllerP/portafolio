<script setup>
import { ref, onMounted } from "vue";
import { datos } from "./datos";
import { otras } from "./datos";
const tecnologias = ref(null);
const otrasTecnologias = ref(null);
import navbarVue from "@/components/navbar/navbar-index.vue";
import accionesVue from "@/components/acciones/index.vue";
import boton1Vue from "@/components/botones/boton1.vue";
const mensaje = ref("proyectos");
const mensaje2 = ref("/");

/* Cursor */
const cursor = ref(null);
const app = ref(null);
onMounted(() => {
  datos.forEach((element) => {
    const div = document.createElement("div");
    const divTwo = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    img.src = element.img;
    img.alt = element.name;
    span.textContent = element.name;
    divTwo.appendChild(span);
    divTwo.classList.add("tooltip");
    div.appendChild(divTwo);
    div.appendChild(img);
    div.classList.add("img-tecnologias");
    tecnologias.value.appendChild(div);
  });
  otras.forEach((element) => {
    const div = document.createElement("div");
    const divTwo = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
    img.src = element.img;
    img.alt = element.name;
    span.textContent = element.name;
    divTwo.appendChild(span);
    divTwo.classList.add("tooltip");
    div.appendChild(divTwo);
    div.appendChild(img);
    div.classList.add("img-tecnologias");

    otrasTecnologias.value.appendChild(div);
  });
  // cursor
  app.value.addEventListener("mousemove", (e) => {
    cursor.value.style.top = e.pageY + "px";
    cursor.value.style.left = e.pageX + "px";
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-1");
      } else {
        entry.target.classList.remove("show-1");
      }
    });
  });
  // animaciones
  const hiddenElements = document.querySelectorAll(".hidden-1");
  hiddenElements.forEach((el) => observer.observe(el));
});
</script>
<template>
  <navbarVue />
  <accionesVue />
  <div id="tecnologias" ref="app">
    <div class="hidden-1">
      <h1 style="padding-bottom: 12px">Tecnologías</h1>
      <div class="text-div">
        <p>
          Los lenguajes de programación:
          <span class="text-blue">Son herramientas</span> que nos permiten dar
          instrucciones a las máquinas, como idiomas que utilizamos para
          comunicarnos con las computadoras. Sin ellos, no existirían los sitios
          web, las aplicaciones móviles ni los videojuegos.
          <span class="text-blue">Las librerías</span> son conjuntos de código
          predefinido que podemos utilizar para realizar tareas comunes,
          ahorrando tiempo y esfuerzo.
        </p>
      </div>

      <div
        class="div-cuadrado"
        ref="tecnologias"
        style="margin-top: 20px; min-height: 10vh"
      ></div>
   
    <h2 style="padding-top: 50px; padding-bottom: 5px">Otras tecnologías</h2>
    <p class="text-div">
      En mi portafolio, no solo encontrarás
      <span class="text-blue">mi experiencia</span> en lenguajes de programación
      y frameworks, sino también en otras tecnologías que considero herramientas
      valiosas para el desarrollo web completo.
    </p>
    <div
      class="div-cuadrado"
      style="margin-top: 20px"
      ref="otrasTecnologias"
    ></div>
 
    <div class="botones-main">
      <boton1Vue :msg="mensaje2" :optionImg="false" />
      <boton1Vue :msg="mensaje" />
    </div>
  </div>
    <div class="cursor" ref="cursor"></div>
  </div>
</template>
<style>
.img-tecnologias {
  padding-top: 20px;
  text-align: center;
  transition: all 0.3s ease;
}
.img-tecnologias div{
  transition: all 0.3s ease;
}
.img-tecnologias img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  margin-bottom: 15px;
}
.img-tecnologias:hover div{
  visibility:visible;
  transition: all 0.3s ease;
}
.img-tecnologias img:hover {
  transform: rotateY(-180deg);
}
/* tooltip */
.tooltip {
  visibility: hidden;
  background-color: rgba(17, 24, 39, 0.8);
  padding: 10px;
  margin-top: -40px;
}
</style>
<style scoped>
#tecnologias {
  padding-top: 17vh;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 100vh;
  padding-bottom: 50px;
  background-color: #181f2e;
}
.botones-main {
    display: flex;
    gap: 20px;
}
.div-cuadrado {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px 30px;
  border-radius: 4.5px;
  background-color: rgba(97, 97, 97, 0.2);
  box-shadow: 0px 0px 5px 2px rgba(0, 130, 90, 0.66);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 130, 90, 0.66);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 130, 90, 0.66);
  -o-box-shadow: 0px 0px 5px 2px rgba(0, 130, 90, 0.66);
}
.text-div {
  text-align: justify;
  line-height: 1.4em;
}
.text-blue {
  color: #00c3ff;
}
/* CURSOR */
.cursor {
  position: absolute;
  background: #00825a;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 20px #00825a, 0 0 60px #00825a, 0 0 100px #00825a;
}

@media screen and (max-width: 768px) {
  .cursor {
    display: none;
  }
}
</style>