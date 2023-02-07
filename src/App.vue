<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AComponent/>
  <BComponent/>
  <CComponent/>
</template>

<script>
import AComponent from './components/AComponent.vue'
import BComponent from './components/BComponent.vue'
import CComponent from "./components/CComponent.vue";

export default {
  name: 'App',
  components: {
    AComponent,
    BComponent,
    CComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>