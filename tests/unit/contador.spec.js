import { mount } from '@vue/test-utils';
import store from '@/store'; 
import CounterView from '@/views/CounterView.vue';

describe('Probando  el componente CounterView.vue', () => {
  it('Probando que el componente aumente ➕ su valor en 1', async () => {
    const wrapper = mount(CounterView, {
      global: {
        plugins: [store]
      }
    });

    await wrapper.find('.increment-button').trigger('click');

    expect(store.state.count).toBe(1);
  });

  it('Probando que el componente disminuya ➖ su valor en 1', async () => {
    store.state.count = 1;
    const wrapper = mount(CounterView, {
      global: {
        plugins: [store]
      }
    });

    await wrapper.find('.decrement-button').trigger('click');

    expect(store.state.count).toBe(0);
  });
});

/**
 * Este archivo contiene un conjunto de pruebas unitarias para el componente `CounterView.vue` 
 * utilizando Jest y Vue Test Utils. Las pruebas verifican la funcionalidad del contador, 
 * asegurándose de que el valor en el estado de Vuex cambie correctamente al hacer clic en 
 * los botones de incremento y decremento.

 * Importaciones:
 * - `mount` de `@vue/test-utils`: Se utiliza para montar el componente `CounterView` en un 
 *   entorno de prueba.
 * - `store` de `@/store`: Importa la instancia de Vuex que contiene el estado global.
 * - `CounterView` de `@/views/CounterView.vue`: El componente que se está probando.

 * Descripción del bloque de pruebas:
 * - `describe('Probando el componente CounterView.vue', () => { ... })`: Describe el conjunto 
 *   de pruebas para el componente `CounterView`.

 * Primera prueba - Incremento:
 * - `it('Probando que el componente aumente ➕ su valor en 1', async () => { ... })`: Esta prueba 
 *   verifica que al hacer clic en el botón de incremento, el valor en el estado de Vuex aumenta en 1.
 *   1. Monta el componente `CounterView` utilizando `mount`.
 *   2. Simula un clic en el botón con la clase `.increment-button`.
 *   3. Verifica que el valor del estado `count` en Vuex sea igual a 1.

 * Segunda prueba - Decremento:
 * - `it('Probando que el componente disminuya ➖ su valor en 1', async () => { ... })`: Esta prueba 
 *   verifica que al hacer clic en el botón de decremento, el valor en el estado de Vuex disminuye en 1.
 *   1. Establece el valor inicial del estado `count` en Vuex a 1.
 *   2. Monta el componente `CounterView`.
 *   3. Simula un clic en el botón con la clase `.decrement-button`.
 *   4. Verifica que el valor del estado `count` en Vuex sea igual a 0.
 */

