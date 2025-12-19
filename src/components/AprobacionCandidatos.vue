<template>
    <div class="candidatos-container">
        <h2 class="titulo-principal">Fotografía</h2>
        <div class="foto-container">
          <img v-if="foto" :src="foto" alt="Foto del candidato">
        </div>

        <div class="campos">
            <div class="titulo">
                <label>Título: </label>
                <input type="text" v-model="titulo">
            </div>
            
            <div class="nombre">
                <label>Nombre: </label>
                <input type="text" v-model="nombre">
            </div>
            
            <div class="apellido">
                <label>Apellido: </label>
                <input type="text" v-model="apellido">
            </div>
            
            <div class="email">
                <label>Email: </label>
                <input type="email" v-model="email">
            </div>
            
            <div class="telefono">
                <label>Teléfono: </label>
                <input type="tel" v-model="telefono">
            </div>

            <div class="botones">
                <button @click="buscarCandidato">Buscar</button>
                <button @click="agregarCandidato">Agregar</button>
            </div>
        </div>

        <div class="tabla-candidatos">
            <TablaCandidatos :candidatos="candidatos" />
        </div>
        
    </div>

    
  
</template>

<script>
import { consumirApiFacade } from '@/clients/RandomUserClient';
import TablaCandidatos from './TablaCandidatos.vue';
export default {
    name: 'AprobacionCandidatos',
    components: {
        TablaCandidatos
    },
    data() {
        return {
            candidatos: [],
            titulo: '',
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            foto: ''
        }
    },
    methods: {
        async buscarCandidato() {
            const resp = await consumirApiFacade();
            const candidato = resp.results[0];

            this.titulo = candidato.name.title;
            this.nombre = candidato.name.first;
            this.apellido = candidato.name.last;
            this.email = candidato.email;
            this.telefono = candidato.phone;
            this.foto = candidato.picture.large;
        },
        agregarCandidato() {
            if (this.titulo && this.nombre && this.apellido && this.email && this.telefono && this.foto) {
                this.candidatos.push({
                    titulo: this.titulo,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    email: this.email,
                    telefono: this.telefono,
                    foto: this.foto
                });
                
                // Limpiar el formulario
                this.titulo = '';
                this.nombre = '';
                this.apellido = '';
                this.email = '';
                this.telefono = '';
                this.foto = '';
            } else {
                alert('Por favor, busca un candidato antes de agregar');
            }
        }
    }
}
</script>

<style scoped>
.candidatos-container {
    background: white;
    border: 2px solid #5555ff;
    border-radius: 20px;
    padding: 30px;
    max-width: 400px;
}

.titulo-principal {
    color: black;
    font-size: 18px;
    margin-bottom: 15px;
    text-align: left;
    font-weight: 500;
}

.foto-container {
    width: 120px;
    height: 120px;
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 15px;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.foto-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.campos {
    display: block;
    color: #5555ff;
    font-size: 13px;
    margin-bottom: 4px;
    font-weight: 500;
    color: black;
    width: 100%;
}

.campo {
    margin-bottom: 12px;
    text-align: left;
}

.botones {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

.botones button {
    background-color: #0066ff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 30px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
}

</style>

