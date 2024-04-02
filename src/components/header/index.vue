<script setup>
</script>
<template>
  <header id="header">
    <div>
      <div>
        <div class="div-flex">
          <h1>Rohyller Pereira</h1>
        </div>
        <div class="btn-div div-flex">
          <RouterLink to="/tecnologias" style="text-decoration: none"
          class="btn-empezar shake" id="btnEmpezar">Empezar</RouterLink>
        </div>
        <div class="div-flex header-text">
          <div>
            <p>
              ¡Hola! Soy un programador apasionado por crear soluciones
              digitales.
              <br />
              En esta web encontrarás:
            </p>
            <br />
            <ul>
              <li>
                <p>
                  Mis proyectos más destacados, con diferentes tecnologías y
                  enfoques.
                </p>
              </li>
              <li>
                <p>
                  Tecnologías: Las herramientas que domino para dar vida a tus
                  ideas.
                </p>
              </li>
              <li>
                <p>Sobre mí: Mi experiencia y pasión por la programación.</p>
              </li>
            </ul>
            <br />
            <p style="text-align: center;">¡Explora mi sitio web y descubre cómo puedo ayudarte!</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
#header {
  width: 100%;
  height: 100vh;
}
#header > div {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
}
#header .header-text {
  width: 100%;
  top: 20px;
  position: relative;
  text-align: justify;
  font-size: 19.5px;
  line-height: 1.2em;
  padding: 0px 20px;
  
}
#header .header-text > div {
  width: 100%;
}
#header .header-text ul {
  padding-left: 20px;
}
.div-flex {
  display: flex;
  justify-content: center;
}
#header .btn-empezar {
  background-color: #00825a;
  color: white;
  border-radius: 5px;
  padding: 12px 25px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  margin-top: 17px;
  margin-bottom: 5px;
}
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
@media screen and (max-width: 860px) {
  #header .header-text {
    font-size: 16px;
    font-weight: 400;
  }
}
@media screen and (max-width: 768px) {
  #header .header-text {
    font-size: 14.5px;
  }
  #header .btn-empezar {
    padding: 10px 20px;
  }
}
@media screen and (max-width: 560px) {
  #header .header-text {
    font-size: 13px;
  }
}
</style>