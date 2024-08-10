<template>
  <div class="parent-container">
    <ChildComponent @receive-content="processContent" />
    <h1 class="received-content-title">Contenido recibido:</h1>
    <p class="received-content">{{ receivedContent }}</p>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent,
  },
  data() {
    return {
      receivedContent: '',
    }
  },
  methods: {
    processContent(content) {
      this.receivedContent = content;
    }
  }
}
</script>

<style scoped>
.parent-container {
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  max-width: 300px;
  margin: 2rem auto;
  background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0);
}

.received-content-title {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.received-content {
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #555;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
