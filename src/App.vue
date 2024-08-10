<template>
  <div class="app-container">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Home</router-link>
      <span class="separator">|</span>
      <router-link to="/contador" class="nav-link">Contador</router-link>
      <span class="separator">|</span>
      <router-link to="/parent" class="nav-link">Parent and Child</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
#app{
  background-color: #f0f0f0;
}

.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: #232323;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  transition: color 0.3s, border-bottom 0.3s;
}

.nav-link:hover,
.nav-link:focus {
  color: #17a2b8;
  border-bottom: 2px solid #17a2b8;
}

.separator {
  color: #fff;
  margin: 0 0.5rem;
}

nav a.router-link-exact-active {
  color: #17a2b8;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-link {
    margin-bottom: 0.5rem;
  }

  .separator {
    display: none;
  }
}
</style>
