<script setup>
import { ref, onMounted } from "vue";
import acciones from "@/components/acciones/index.vue";
const form = ref(null);
const name = ref("");
const correo = ref("");
const message = ref("");
const nameInput = ref(null);
const correoInput = ref(null);
const messageInput = ref(null);

function validar(name, input, auxInput) {
  if (name == "") {
    alert(`${input} está vacio`);
    auxInput.value.style.borderColor = "red";
    return false;
  }
  return true;
}
function validarInput(input, auxInput) {
  if (input.length <= 0 && input == "") {
    auxInput.value.style.borderColor = "red";
  } else {
    auxInput.value.style.borderColor = "#00825a";
  }
}
function validateForm() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(correo.value)) {
    return false;
  }
  return true;
}
onMounted(() => {
  form.value.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      validar(name.value, "Nombre", nameInput) &&
      validar(correo.value, "Correo", correoInput) &&
      validar(message.value, "Mensaje", messageInput)
    ) {
      if (!validateForm()) {
        fetch(form.value.action, {
          method: 'POST',
          body: new FormData(form.value),
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          if (response.ok) {
            alert("Enviado correctamente");
            name.value = "";
            correo.value = "";
            message.value = "";
            correoInput.value.style.borderColor = "#00825a";
          }else{
            alert("ERROR datos no enviados");
          }
        });
      } else {
        alert("error");
        correoInput.value.style.borderColor = "red";
      }
    }
  });
  nameInput.value.addEventListener("keyup", (e) => {
    validarInput(name.value.trim(), nameInput);
  });
  correoInput.value.addEventListener("keyup", (e) => {
    validarInput(correo.value.trim(), correoInput);
  });
  messageInput.value.addEventListener("keyup", (e) => {
    validarInput(message.value.trim(), messageInput);
  });
});
</script>

<template>
  <acciones />
  <div id="formulario">
    <button class="btn-contacto">
      <RouterLink to="/" style="text-decoration: none">Inicio</RouterLink>
    </button>
    <div>
      <div>
        <h1>Contáctame</h1>
        <form
          id="form"
          novalidate
          ref="form"
          action="https://formspree.io/f/xeqyrdnr"
          method="POST"
        >
          <div>
            <label for="name">Nombre Completo</label>
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="off"
              v-model="name"
              ref="nameInput"
              maxlength="60"
            />
          </div>
          <div>
            <label for="email">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="off"
              v-model="correo"
              ref="correoInput"
              maxlength="70"
            />
          </div>
          <div>
            <label for="message">Mensaje</label>
            <textarea
              name="message"
              id="message"
              placeholder="Comparte tu idea y te ayudaremos a darle vida..."
              v-model="message"
              ref="messageInput"
              rows="6"
              maxlength="400"
            ></textarea>
          </div>
          <input type="submit" name="submit" value="Enviar info" />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 31px;
  padding-bottom: 23px;
  text-align: center;
}
#formulario {
  width: 100%;
  position: fixed;
  z-index:9999;

  /* #181f2e; */
}
#formulario > div {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#formulario > div > div {
  width: 50%;
  padding: 30px 25px;
  background-color: #181f2e;
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
  margin-top: 15px;
  margin-left: 20px;
  position: absolute;
  transition: all 0.3s ease;
}
.btn-contacto:hover {
  transform: scale(1.05);
}
#form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
#form label {
  padding-bottom: 6.5px;
  font-size: 17px;
}

#form input,
#form textarea {
  padding: 6.5px;
  background-color: transparent;
  border: 1px solid #00825a;
  resize: none;
}
#form input:focus,
#form textarea:focus {
  outline: none;
}
#form > input[type="submit"] {
  background-color: #00825a;
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
}
.my-swal-container {
  z-index: 9999999999999; 
  position:fixed;
  background-color: blue;
}
@media screen and (max-width: 1024px) {
  #formulario > div > div {
    width: 80%;
    margin-top: 30px;
    padding: 20px 25px;
  }
}
@media screen and (max-width: 768px) {
  #formulario > div > div {
    width: 90%;
    margin-top: 30px;
    padding: 20px 25px;
  }
}
</style>
