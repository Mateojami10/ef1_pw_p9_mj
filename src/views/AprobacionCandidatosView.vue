<template>
    <div class="view-container">
        <AprobacionCandidatos />
    </div>
</template>

<script>
import AprobacionCandidatos from '@/components/AprobacionCandidatos.vue';

export default {
    name: 'AprobacionCandidatosView',
    components: {
        AprobacionCandidatos
    }
}
</script>

<style scoped>
.view-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}
</style>