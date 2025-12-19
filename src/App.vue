<template>
  <div class="app">
    <AprobacionCandidatosView />
  </div>
  
</template>

<script>
import AprobacionCandidatosView from './views/AprobacionCandidatosView.vue';
export default {
  components: {
    AprobacionCandidatosView
  }

}
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
}
</style>