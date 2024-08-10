<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" name="contenido" placeholder="Escribe algo interesante...">
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
  export default {
    name: 'ChildComponent',
    methods: {
      handleSubmit(event) {
        const contenido = event.target.contenido.value;
        this.$emit('receiveContent', contenido);
        event.target.reset();
      }
    }
  }
</script>

<style scoped>
button {
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 8px;
  background-color: #d4edda;
  color: #155724;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #c3e6cb;
}

button:active {
  transform: scale(0.95);
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #17a2b8;
  outline: none;
}
</style>