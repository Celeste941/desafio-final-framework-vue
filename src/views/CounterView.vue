<template>
  <div class="counter-container">
    <h1>¡Bienvenido a nuestro Contador!</h1>
    <p class="count-display"> {{ count }}</p>
    <div class="buttons">
      <button @click="decrement" class="decrement-button">➖</button>
      <button @click="increment" class="increment-button">➕</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounterView',
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    }
  }
};
</script>

<style scoped>
.counter-container {
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  max-width: 300px;
  margin: 2rem auto;
  background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0);
}

h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.count-display {
  font-size: 3rem;
  margin: 1rem 0;
  color: #555;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.decrement-button {
  background-color: #f8d7da;
  color: #721c24;
}

.increment-button {
  background-color: #d4edda;
  color: #155724;
}

button:hover {
  background-color: #ddd;
}

button:active {
  transform: scale(0.95);
}
</style>
