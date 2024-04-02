<script setup>
const props = defineProps({
  msg: String,
  optionImg: {
    type: Boolean,
    default: true
  } 
})
</script>

<template>
    <button id="btnContinuar"> 
      <router-link :to="props.msg" style="text-decoration: none">
      
      <template v-if="props.optionImg">
        continuar
        <img src="@/assets/img/flecha-correcta.png" alt="flecha"/>
      </template>
      <template v-else>
        <img src="@/assets/img/flecha-incorrecta.png" alt="flecha"/>
        regresar
      </template>
    </router-link>
    </button>
</template>

<style scoped>
#btnContinuar{
  font-size: 14.5px;
  font-weight: 500;
  margin-top: 25px;
  cursor: pointer;
  border-radius: 5px;
  padding: 8px 15px;
  border: 2px solid rgba(0, 130, 90, 0.66);
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  background-color: transparent;
}
#btnContinuar a{
  display: flex;
  justify-content:space-between;
  gap: 10px;
}
#btnContinuar:hover{
  background-color: rgba(0, 130, 90, 0.66);
}
#btnContinuar img{
  width: 14px;
  height: 18px;
}
</style>