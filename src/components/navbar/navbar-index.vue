<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const navbar = ref(null);
const navbarTodo = ref(null);
const navbar2Todo = ref(null);
const btnContacto = ref(null);
const ul1 = ref(null);
const aux = ref(true);
onMounted(() => {
  navbar.value.onclick = () => {
    if (aux.value) {
      navbar.value.children[0].src = "/cerrar.png";
      aux.value = false;
    } else {
      aux.value = true;
      navbar.value.children[0].src = "/menu.png";
    }
    navbarTodo.value.classList.toggle("navbar-completo");
    navbar2Todo.value.style.display == "none"
      ? (navbar2Todo.value.style.display = "block")
      : (navbar2Todo.value.style.display = "none");
  };
  watch(
    () => route.name,
    (newVal, oldVal) => {
      switch (route.name) {
        case "tecnologias":
          ul1.value.children[1].children[0].style.color = "#00825A";
          navbar2Todo.value.children[0].children[1].children[0].style.color =
            "#00825A";
          setTimeout(() => {
            btnContacto.value.classList.remove("shake");
          }, 7000);
          btnContacto.value.classList.add("shake");
          break;
        case "proyectos":
          ul1.value.children[2].children[0].style.color = "#00825A";
          navbar2Todo.value.children[0].children[2].children[0].style.color =
            "#00825A";
          setTimeout(() => {
            btnContacto.value.classList.remove("shake");
          }, 7000);
          btnContacto.value.classList.add("shake");
          break;
        case "sobre":
          ul1.value.children[3].children[0].style.color = "#00825A";
          navbar2Todo.value.children[0].children[3].children[0].style.color =
            "#00825A";
          setTimeout(() => {
            btnContacto.value.classList.remove("shake");
          }, 7000);
          btnContacto.value.classList.add("shake");
          break;
        default:
          ul1.value.children[0].children[0].style.color = "#00825A";
          ul1.value.children[1].children[0].style.color = "white";
          ul1.value.children[2].children[0].style.color = "white";
          navbar2Todo.value.children[0].children[0].children[0].style.color =
            "#00825A";
          navbar2Todo.value.children[0].children[1].children[0].style.color =
            "white";
          navbar2Todo.value.children[0].children[2].children[0].style.color =
            "white";
          btnContacto.value.classList.remove("shake");
          break;
      }
    },
    { immediate: true }
  );
});
</script>

<template>
  <div id="navbar-div" ref="navbarTodo">
    <nav class="navbar">
      <div>
        <div>
          <RouterLink to="/" style="text-decoration: none">
            <span>Brief<span class="text-green">case</span></span>
          </RouterLink>
        </div>
        <ul ref="ul1">
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li>
            <RouterLink to="/tecnologias" style="text-decoration: none"
              >Tecnologías</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/proyectos" style="text-decoration: none"
              >Proyectos</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/sobre" style="text-decoration: none"
              >Sobre mi</RouterLink
            >
          </li>
        </ul>
        <div>
          <button
            class="btn-contacto shake"
            style="margin-top: 10px"
            ref="btnContacto"
          >
            <RouterLink to="/formulario" style="text-decoration: none">
              Contáctame
            </RouterLink>
          </button>
        </div>
      </div>
      <div class="menu-btn" ref="navbar">
        <img src="/menu.png" alt="menu" />
      </div>
    </nav>
    <nav class="navbar-2" style="display: none" ref="navbar2Todo">
      <ul>
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li>
          <RouterLink to="/tecnologias" style="text-decoration: none"
            >Tecnologías</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/proyectos" style="text-decoration: none"
            >Proyectos</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/sobre" style="text-decoration: none"
            >Sobre mi</RouterLink
          >
        </li>
      </ul>
      <div>
        <button class="btn-contacto" style="margin-top: 10px">
          <RouterLink to="/formulario" style="text-decoration: none">
            Contáctame
          </RouterLink>
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#navbar-div {
  position: fixed;
  width: 100%;
  padding: 20px 30px;
  font-size: 18px;
  z-index: 999999999;
  background-color: rgba(17, 24, 39, 0.8);
  box-shadow: 0px 0px 10px 2px rgb(14, 13, 13);
}
#navbar-div .navbar > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#navbar-div .navbar > div {
  font-size: 20px;
  font-weight: 500;
}
#navbar-div .navbar ul {
  list-style: none;
  display: flex;
  gap: 30px;
}
#navbar-div .navbar ul a {
  text-decoration: none;
}
#navbar-div .navbar ul li a:hover {
  transition: all 0.3s ease-in;
}
#navbar-div .navbar ul li a:hover {
  color: #00825a;
}
#navbar-div .navbar .text-green {
  color: #00825a;
  font-size: 21px;
}
.btn-contacto {
  background-color: #00825a;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}
#navbar-div .menu-btn img {
  width: 20px;
  height: 20px;
  display: none;
  cursor: pointer;
}
/* 2 navbar */
.navbar-completo {
  background-color: rgba(17, 24, 39, 0.2);
}
#navbar-div .navbar-2 ul {
  list-style: none;
}
#navbar-div .navbar-2 ul li {
  padding-top: 20px;
}
#navbar-div .navbar-2 ul li a {
  transition: all 0.3s ease;
  text-decoration: none;
}
#navbar-div .navbar-2 ul li a:hover {
  color: #00825a;
}
/* shake */
.shake {
  animation: shake 3s linear infinite;
}
@keyframes shake {
  10% {
    transform: scale(1.05) rotate(5deg);
  }
  20% {
    transform: scale(1.05) rotate(-5deg);
  }
  30% {
    transform: scale(1.05) rotate(5deg);
  }
  40% {
    transform: none;
  }
}
/* media queries */
@media screen and (min-width: 768px) {
  #navbar-div .navbar-2 {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  #navbar-div .navbar .btn-contacto,
  #navbar-div .navbar ul {
    display: none;
  }
  #navbar-div .menu-btn img {
    display: block;
  }
  #navbar-div .navbar {
    display: flex;
    justify-content: space-between;
  }
}
</style>
