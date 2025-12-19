<template>
  <div class="tabla-container">
        <table class="tabla-candidatos">
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Atributo 5</th>
                    <th>Atributo 6</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(candidato, index) in candidatos" :key="index">
                    <td>{{ candidato.titulo }}</td>
                    <td>{{ candidato.nombre }}</td>
                    <td>{{ candidato.apellido }}</td>
                    <td>{{ candidato.email }}</td>
                    <td>{{ candidato.telefono }}</td>
                </tr>
                <!-- Filas vacías-->
                <tr v-for="n in filasVacias" :key="'empty-' + n">
                    <td>·</td>
                    <td>·</td>
                    <td>·</td>
                    <td>·</td>
                    <td>·</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
export default {
    props: {
        candidatos: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        filasVacias() {
            const totalFilas = 5;
            return Math.max(0, totalFilas - this.candidatos.length);
        }
    }
}
</script>

<style scoped>
.tabla-container {
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
}

.tabla-candidatos {
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #5555ff;
  table-layout: fixed;
}

.tabla-candidatos thead {
  background-color: white;
}

.tabla-candidatos th {
  color: #5555ff;
  padding: 8px 4px;
  text-align: center;
  font-weight: 600;
  border: 1px solid #5555ff;
  font-size: 12px;
  word-wrap: break-word;
}

.tabla-candidatos td {
  padding: 8px 4px;
  text-align: center;
  border: 1px solid #5555ff;
  color: #5555ff;
  font-style: italic;
  background-color: white;
  font-size: 11px;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tabla-candidatos tbody tr {
  background-color: white;
}
</style>
