<script setup>
import { ref, onMounted } from "vue";
import navbarVue from "@/components/navbar/navbar-index.vue";
import boton2 from "@/components/botones/boton1.vue";
import { datos } from "./datos";
const mensaje2 = ref("proyectos");
const link = ref(null);
const flechaIzq = ref(null);
const flechaDer = ref(null);
let aux = ref(0);

/* Cursor */
const cursor = ref(null);
const app = ref(null);
onMounted(() => {
  link.value.href = datos[aux.value].url;
  link.value.innerText = datos[aux.value].text;
  if (aux.value == 0) {
    flechaIzq.value.style.opacity = 0.3;
  }
  flechaIzq.value.addEventListener("click", () => {
    if (aux.value != 0) {
      aux.value--;
      if (aux.value == 0) {
        flechaIzq.value.style.opacity = 0.4;
      }
      if (aux.value <= datos.length - 1) {
        flechaDer.value.style.opacity = 1;
      }
      link.value.href = datos[aux.value].url;
      link.value.innerText = datos[aux.value].text;
    }
  });
  flechaDer.value.addEventListener("click", () => {
    if (aux.value != datos.length - 1) {
      aux.value++;
      if (aux.value == 1) {
        flechaIzq.value.style.opacity = 1;
      }
      if (aux.value == datos.length - 1) {
        flechaDer.value.style.opacity = 0.4;
        flechaIzq.value.style.opacity = 1;
      }
      link.value.href = datos[aux.value].url;
      link.value.innerText = datos[aux.value].text;
    }
  });
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
  const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-1");
      } else {
        entry.target.classList.remove("show-1");
      }
    });
  });
  // animaciones
  const hiddenElements = document.querySelectorAll(".hidden-2");
  hiddenElements.forEach((el) => observer.observe(el));
  // animaciones 2
  const hiddenElements2 = document.querySelectorAll(".hidden-1");
  hiddenElements2.forEach((el) => observerTwo.observe(el));
});
</script>

<template>
  <navbarVue />
  <div id="sobre" ref="app">
    <div class="sobre">
      <div class="hidden-2">
        <h1>Sobre mi</h1>
        <section class="section">
          <p>
            Soy un apasionado de <span class="green">la programación</span>, me
            encanta crear soluciones digitales que sean útiles, eficientes y
            atractivas. Dedico tiempo cada día a aprender nuevas tecnologías y
            mejorar mis habilidades.
          </p>
          <br />
          <p>
            Además de programar, estoy constantemente ampliando mis
            conocimientos en otras áreas. Estudio idiomas para mejorar mi
            comunicación y ampliar mis horizontes, y también me dedico a
            aprender herramientas como Photoshop y Excel que me permiten ser más
            versátil en mi trabajo. Mi objetivo es convertirme en un
            <span class="green">desarrollador integral</span> capaz de afrontar
            cualquier desafío con creatividad, innovación y profesionalismo.
          </p>
          <br />
          <p>
            Estas habilidades las he desarollado de forma autodidacta y en las
            siguientes academias de <span class="green">programación</span>.
          </p>
          <div class="carrusel-academias">
            <div>
              <a href="https://cadif1.com/" target="_blank">
                <img src="/tecnologias/cadif1.svg" alt="cadif1" />
              </a>
            </div>
            <div>
              <a href="https://gracosoft.com/" target="_blank">
                <img src="/tecnologias/gracosoft.png" alt="gracosoft" />
              </a>
            </div>
            <div>
              <a href="https://open-bootcamp.com/" target="_blank">
                <img src="/tecnologias/Open-Bootcamp.png" alt="open-bootcamp" />
              </a>
            </div>
            <div>
              <a href="https://www.udemy.com/" target="_blank">
                <img src="/tecnologias/Udemy.png" alt="udemy" />
              </a>
            </div>
            <div>
              <a href="https://youtube.com" target="_blank">
                <img src="/tecnologias/Youtube.png" alt="youtube" />
              </a>
            </div>
          </div>
          <p>
            En esta sección, me complace mostrar mis certificados, que
            representan mi compromiso con la
            <span class="green">excelencia profesional</span> y el aprendizaje
            continuo. Estos logros son un testimonio de mis habilidades y
            conocimientos en diversas áreas.
          </p>
        </section>
      </div>

      <div class="carrusel-link">
        <div ref="flechaIzq">
          <img src="@/assets/img/flecha-2-izq.png" alt="flecha" />
        </div>
        <div>
          <a href="" ref="link" target="_blank">link</a>
        </div>
        <div ref="flechaDer">
          <img src="@/assets/img/flecha-2-der.png" alt="flecha" />
        </div>
      </div>
      <section class="section-redes">
        <article>
          <h3>Conecta conmigo en las redes sociales:</h3>
          <p class="p-text" style="padding-top: 4px; padding-bottom: 10px">
            ¿Quieres estar al día de mis últimas publicaciones, proyectos y
            novedades? ¡No te pierdas nada siguiéndome en mis redes sociales!
          </p>
        </article>
        <article class="redes">
          <div>
            <a href="https://www.instagram.com/roro_developer/" target="_blank">
              <img src="@/assets/img/instagram.png" alt="instagram" />
            </a>
          </div>
          <div>
            <a href="https://t.me/Rohyller_P" target="_blank">
              <img src="@/assets/img/telegrama.png" alt="telegrama" />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/rohyller-pereira-albarran-97b7b01b7/"
              target="_blank"
            >
              <img src="@/assets/img/linkedin.png" alt="linkedin" />
            </a>
          </div>
          <div>
            <a href="https://github.com/RohyllerP" target="_blank">
              <img src="@/assets/img/github.png" alt="github" />
            </a>
          </div>
        </article>
      </section>
      <div class="botones-main p-text" style="padding-top: 50px">
        <boton2 :msg="mensaje2" :optionImg="false" />
      </div>
    </div>
    <div class="cursor" ref="cursor"></div>
  </div>
</template>
<style scoped>
#sobre {
  min-height: 100vh;
  background-color: #181f2e;
  padding-top: 21vh;
  padding-left: 30px;
  padding-right: 30px;
  min-height: 100vh;
  padding-bottom: 50px;
}
#sobre .section {
  line-height: 1.3em;
  text-align: justify;
  padding-top: 10px;
}
.carrusel-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}
.carrusel-link a {
  transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
}
.carrusel-link a:hover {
  color: black;
}
.carrusel-link img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}
.green {
  color: #00825a;
}
.p-text {
  line-height: 1.3em;
}
.section-redes {
  background: linear-gradient(
    257deg,
    rgba(55, 52, 224, 0.9) 20%,
    rgba(0, 130, 90, 0.9) 74%
  );
  padding: 25px 15px;
  margin-top: 30px;
}
.section-redes > article p {
  font-size: 18px;
}
.redes {
  display: flex;
  gap: 20px;
  padding-top: 10px;
}
.redes img {
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
}
.redes img:hover {
  transform: scale(1.15);
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
.carrusel-academias {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}
.carrusel-academias img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  transition: all 0.3s ease-in;
}
.carrusel-academias img:hover {
  transform: scale(1.05);
}
@media screen and (max-width: 768px) {
  .carrusel-academias img {
    width: 120px;
  height: 120px;
  }
  .cursor {
    display: none;
  }
  #sobre {
    padding-top: 17vh;
    font-size: 15px;
  }
  .carrusel-link a {
    font-size: 14px;
  }
  .carrusel-link img {
    width: 25px;
    height: 25px;
  }
  .section-redes > article p {
    font-size: 16px;
  }
}
@media screen and (max-width: 420px) {
  .carrusel-link img {
    width: 21px;
    height: 21px;
  }
  .carrusel-link a {
    font-size: 12.5px;
    position: relative;
    top: -2px;
  }
  .carrusel-academias {
    align-items: center;
    flex-direction: column;
  }
  .carrusel-academias img{
    width: 100px;
    height: 100px;
  }
}
</style>