<script setup>
import { ref, onMounted } from "vue";
const burbujaPadre = ref(null);

function mostrarBurbujas(aux) {
  if (
    burbujaPadre.value.parentNode.children[0].children[aux].style.visibility == "hidden"
  ) {
    burbujaPadre.value.parentNode.children[0].children[aux].style.visibility =
    "visible"
    burbujaPadre.value.parentNode.children[0].children[aux].style.opacity = 1;  
  } else {
    burbujaPadre.value.parentNode.children[0].children[aux].style.visibility = "hidden";
    burbujaPadre.value.parentNode.children[0].children[aux].style.opacity = 0;
  }
}
onMounted(() => {
  burbujaPadre.value.onclick = () => {
    mostrarBurbujas(0);
    mostrarBurbujas(1);
    mostrarBurbujas(2);
  };
});
</script>
<template>
  <div id="acciones">
    <div style="margin-bottom: 55px">
      <div class="burbuja-blanca burbuja-tamano" 
      style="opacity: 0;visibility: hidden; transition: all 1.7s ease-in-out">
        <a
          href="https://portafolio-theta-two.vercel.app/src/assets/pdf/cv-rohy-2.pdf"
          target="_blank"
        >
          <img src="@/assets/img/cv.png" alt="cv" />
        </a>
      </div>
      <div class="burbuja-blanca burbuja-tamano" 
      style="opacity: 0;visibility: hidden; transition: all 1s ease-in-out">
        <a
          href="https://www.linkedin.com/in/rohyller-pereira-albarran-97b7b01b7/"
          target="_blank"
        >
          <img
            style="padding-top: 3px;"
            src="@/assets/img/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>
      <div class="burbuja-blanca burbuja-tamano"
      style="opacity: 0;visibility: hidden; transition: all 0.7s ease-in-out">
        <a href="https://t.me/Rohyller_P" target="_blank">
          <img
            style="padding-top: 3px;"
            src="@/assets/img/telegrama.png"
            alt="telegram"
          />
        </a>
      </div>
    </div>
    <div ref="burbujaPadre">
      <img
        style="
          position: fixed;
          bottom: 0;
          right: 0;
          margin-right: 25px;
          margin-bottom: 20px;
        "
        class="burbuja-tamano"
        src="@/assets/img/lista-de-contactos.png"
        alt="lista de contactos"
      />
    </div>
  </div>
</template>
<style scoped>
#acciones {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 25px;
  margin-bottom: 20px;
  z-index: 9999999999;
}
#acciones img {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
#acciones img:hover{
 
  transform: scale(1.1);
}
.burbuja-blanca {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 7px;
  background-color: white;
  transition: all 0.3s ease-in-out;
}
.burbuja-tamano {
  width: 50px;
  height: 50px;
}
.burbuja-blanca img {
  width: 30px;
  height: 30px;
  transition: opacity 0.5s ease-in-out;
}
@media screen and (max-width: 768px) {
  .burbuja-tamano {
    width: 43px;
    height: 43px;
  }
  .burbuja-blanca img {
    width: 27px;
    height: 27px;
  }
}
@media screen and (max-width: 425px) {
  .burbuja-tamano {
    width: 40px;
    height: 40px;
  }
  .burbuja-blanca img {
    width: 23px;
    height: 23px;
  }
}
</style>
