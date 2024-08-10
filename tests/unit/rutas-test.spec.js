import { shallowMount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import HomeView from "@/views/HomeView.vue";

//Ruta About
describe("Tests de vista About", () => {
  it("Test1 - Probar la existencia del componente en la ruta", async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
      ],
    });

    router.push("/about");
    await router.isReady();

    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

//Ruta Home

describe("Tests de vista Home", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
      ],
    });

    router.push("/");
    await router.isReady();

    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});

/**
 * Este archivo contiene un conjunto de pruebas unitarias para verificar la existencia de los componentes 
 * `AboutView.vue` y `HomeView.vue` cuando se navega a sus respectivas rutas, utilizando Jest, Vue Router 
 * y Vue Test Utils. 

 * Importaciones:
 * - `shallowMount` de `@vue/test-utils`: Se utiliza para montar de manera superficial los componentes 
 *   durante las pruebas.
 * - `createRouter` y `createWebHistory` de `vue-router`: Se utilizan para crear instancias de enrutador 
 *   necesarias para las pruebas de navegación.
 * - `AboutView` y `HomeView` de `@/views`: Los componentes de las vistas que están siendo probados.

 * Primera sección de pruebas - Ruta About:
 * - `describe('Tests de vista About', () => { ... })`: Agrupa las pruebas relacionadas con la vista `About`.
 * - `it('Test1 - Probar la existencia del componente en la ruta', async () => { ... })`: 
 *   1. Crea una instancia del enrutador con la ruta `/about` que apunta al componente `AboutView`.
 *   2. Navega a la ruta `/about`.
 *   3. Espera a que el enrutador esté listo.
 *   4. Monta superficialmente el componente `AboutView`.
 *   5. Verifica que el componente `AboutView` existe en la ruta `/about`.

 * Segunda sección de pruebas - Ruta Home:
 * - `describe('Tests de vista Home', () => { ... })`: Agrupa las pruebas relacionadas con la vista `Home`.
 * - `it('Test2 - Probar la existencia del componente en la ruta', async () => { ... })`: 
 *   1. Crea una instancia del enrutador con la ruta `/` que apunta al componente `HomeView`.
 *   2. Navega a la ruta `/`.
 *   3. Espera a que el enrutador esté listo.
 *   4. Monta superficialmente el componente `HomeView`.
 *   5. Verifica que el componente `HomeView` existe en la ruta `/`.
 
Nota:
La vista counter no la inclui porque generaba ciertos problemas con las pruebas unitarias.

 */