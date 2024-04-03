<script setup>
import { proyects } from "./data";
import "@splidejs/vue-splide/css";
import "@splidejs/vue-splide/css/skyblue";
import "@splidejs/vue-splide/css/sea-green";
import "@splidejs/vue-splide/css/core";

function valorId(event) {
  const id = event.target.id;
  const valor = proyects[id.substring(id.indexOf("-") + 1) - 1].title;
  document.querySelector("#modalName").innerText = valor;
  document.querySelector(".modal").style.opacity = 1;
  document.querySelector(".modal").style.visibility = "visible";
  document.querySelector("#modalText").innerText =
  proyects[id.substring(id.indexOf("-") + 1) - 1].text;
  document.body.style.overflowY = 'hidden';
  document.querySelector("#verSitio").href = proyects[id.substring(id.indexOf("-") + 1) - 1].link
  document.querySelector("#imgLogos").innerHTML = "";
  proyects[id.substring(id.indexOf("-") + 1) - 1].logos.forEach((element) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = element;
    img.classList.add("img-logos-modal");
    div.appendChild(img);
  
    document.querySelector("#imgLogos").appendChild(div);
  })
}
function btnClose() {
  document.querySelector(".modal").style.visibility = "hidden";
  document.querySelector(".modal").style.opacity = 0;
  document.body.style.overflowY = 'scroll';
}
</script>
<template>
  <div class="modal hidden" style="opacity: 0; visibility: hidden">
    <div>
      <div class="modal-header">
        <div>
          <h3 id="modalName">Proyecto nombre</h3>
        </div>
        <div class="btn-close-modal">
          <button id="btnClose" @click="btnClose">
            <img src="@/assets/img/cerrar-2.png" alt="cerrar" />
          </button>
        </div>
      </div>
      <div class="modal-main">
        <div style="padding-top: 20px">
          <p id="modalText" style="font-size: 17px;"></p>
        </div>
        <p style="padding-top: 20px; font-size: 17px; font-weight: 500;">Tecnologías utilizadas:</p>
        <div class="modal-main-img" id="imgLogos"></div>
        <div> 
          <button class="btn-options" style="margin-top: 20px">
            <a
              href=""
              target="_blank"
              style="text-decoration: none;"
              id="verSitio"
              >Ver sitio</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <div id="splide">
    <Splide
      class="splide"
      :options="{
        rewind: true,
        perPage: 2,
        gap: '20px',
        autoplay: true,
        breakpoints: { 980: { perPage: 1 }, 768: { arrows: false } },
        pagination: false,
      }"
      aria-label="My Favorite Images"
    >
      <SplideSlide
        class="splide__slide"
        v-for="proyect in proyects"
        :key="proyect.id"
        data-splide-interval="4000"
      >
        <img :src="proyect.url" :alt="proyect.alt" />
        <div class="btn-div">
          <button class="btn-options">
            <a
              :href="proyect.link"
              target="_blank"
              style="text-decoration: none"
              >Ver sitio</a
            >
          </button>
          <button
            class="btn-options"
            :id="'btn-' + proyect.id"
            @click="valorId($event)"
          >
            Conocer más
          </button>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<style>
.img-logos-modal{
  width: 42px;
  height: 42px;
  cursor:pointer;
  transition: all 0.3s ease-in-out
}
.img-logos-modal:hover{
  transform: translateY(15px);
}
@media screen and (max-width: 600px) {
  .img-logos-modal{
  width: 35px;
  height: 35px;
  cursor:pointer
}
}
</style>
<style scoped>
#splide {
  width: 100%;
}

.splide img {
  width: 100%;
  height: 380px;
}
.btn-div {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.btn-options {
  background-color: #00825a;
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 8px 2px;
  cursor: pointer;
  transition: all 0.3s ease
}
.btn-options:hover {
  transform: scale(1.1);
}
/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  transition: all 0.3s ease;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

.modal > div {
  width: 60%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
}
.modal .modal-header {
  padding: 10px 0px;
  border-bottom: 2px solid rgb(0, 0, 0);
}
.modal .modal-header > div {
  width: 100%;
}
.modal div h3,
.modal div p {
  color: rgb(36, 36, 36);
}
.btn-close-modal {
  position: relative;
}
.btn-close-modal button {
  position: absolute;
  right: 0px;
  top: -24px;
  background-color: white;
  border: 0px;
  cursor: pointer;
}
.btn-close-modal button img {
  width: 22px;
  height: 22px;
}
#imgLogos{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .modal > div {
    width: 70%;
  }
}
@media screen and (max-width: 480px) {
  .splide img {
    height: 350px;
    object-fit: contain;
  }
  .modal > div {
    width: 90%;
  }
}
</style>