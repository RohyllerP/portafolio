<script setup>
import { ref, onMounted } from "vue";
import navbarVue from "@/components/navbar/navbar-index.vue";
import accionesVue from "@/components/acciones/index.vue";
import boton1 from "@/components/botones/boton1.vue";
import boton2 from "@/components/botones/boton1.vue";
import swiper from "@/components/swiper/index.vue";
const mensaje = ref("sobre");
const mensaje2 = ref("tecnologias");

/* Cursor */
const cursor = ref(null);
const app = ref(null);
onMounted(() => {
  app.value.addEventListener("mousemove", (e) => {
    cursor.value.style.top = e.pageY + "px";
    cursor.value.style.left = e.pageX + "px";
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-2");
      } else {
        entry.target.classList.remove("show-2");
      }
    });
  });
  // animaciones
  const hiddenElements = document.querySelectorAll(".hidden-2");
  hiddenElements.forEach((el) => observer.observe(el));
});
</script>

<template>
  <navbarVue />
  <accionesVue />
  <div id="proyectos" ref="app">
    <div class="hidden-2">
      <h1 class="p-text">Proyectos</h1>
    </div>
    <section id="sec-texto">
      <article class="p-text">
        <div class="hidden-2">
          <p>
            En esta sección de mi
            <span class="green-text">portafolio web</span>, quiero compartir
            contigo algunos de mis proyectos personales. Estos proyectos me han
            permitido explorar nuevas tecnologías, desarrollar mis habilidades y
            poner en práctica mi creatividad.
          </p>

          <br />

          <p>Los proyectos personales me permiten:</p>
          <ul style="padding-left: 18px">
            <li>Aprender y experimentar con nuevas tecnologías.</li>
            <li>Desarrollar mis habilidades</li>
            <li>Poner en practica mi creatividad.</li>
          </ul>
          <br />
        </div>
      </article>
      <article class="hidden-2">
        <swiper />
      </article>
      <article class="p-text">
        <p>Al mostrar mis proyectos personales, espero que puedas:</p>
        <ul style="padding-left: 18px">
          <li>Conocer mejor mi trabajo</li>
          <li>Apreciar mi creatividad</li>
          <li>Comprender mi pasión:</li>
        </ul>
      </article>
    </section>
    <div class="botones-main p-text">
      <boton2 :msg="mensaje2" :optionImg="false" />
      <boton1 :msg="mensaje" />
    </div>
    <div class="cursor" ref="cursor"></div>
  </div>
</template> 

<style scoped>
#proyectos {
  padding-top: 20vh;

  padding-bottom: 30px;
  min-height: 100vh;
  background-color: #181f2e;
}
.p-text {
  padding-left: 30px;
  padding-right: 30px;
}
#sec-texto article {
  line-height: 1.5em;
}
h1 {
  padding-bottom: 20px;
}
.green-text {
  color: #00825a;
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