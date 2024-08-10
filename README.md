# Proyecto Vue.js con Vuex - Vue Router - Testing.
Este proyecto es una aplicación Vue.js que utiliza Vuex para la gestión del estado y Vue Router para la navegación entre vistas. Además, se ha implementado comunicación entre componentes y se han añadido pruebas unitarias y e2e para asegurar el correcto funcionamiento de la aplicación.

## Para ejecutar las pruebas unitarias y e2e:

- Pruebas Unitarias:    
  ```npm run test:unit```

- Pruebas E2E:  
```npm run test:e2e```

## Requerimientos
1. **Manejo del estado con Vuex** En este ejercicio deberán configurar Vuex para gestionar el estado de un contador donde se deberá incrementar y decrementar su valor. Dicho valor partirá por defecto en 0. Además, deberás aplicar pruebas
unitarias para:

- **Verificar que se reciba un valor inicial en el contador.**  
- **Probar la funcionalidad de incremento y decremento del contador.** [Prueba incremento - decremento](./tests/unit/contador.spec.js#L5)


2. **Navegación con Vue Router:** Al crear la aplicación con Vue Router
mediante CLI se nos crean por defecto algunas vistas. El objetivo de este ejercicio es
que puedas validar mediante pruebas unitarias la existencia de componentes que
controlen cada una de las vistas. [Prueba de rutas about y home](./tests/unit/rutas-test.spec.js#L5)

3. **Comunicación entre componentes:** Para este ejercicio deberán existir dos
componentes, los cuales se pueden llamar ```Parent.vue y Child.vue.``` El objetivo de
este ejercicio es que el componente Child va a tener un campo de ingreso de texto y
un botón. Al dar clic en el botón el texto del input será enviado al Parent y este mostrará
en pantalla el resultado. Además, deberás generar una prueba que permita validar que
al dar clic sobre el botón del componente Child, se envíe algún texto.   
- [Componente Parent](./src/components/ParentComponent.vue#L1)
- [Componente Child](./src/components/ChildComponent.vue#L1)
- [Prueba e2e](./tests/e2e/testing-parent-child.js#L1)
  
4. Por último, genera el build de producción y súbelo utilizando Firebase Hosting.
https://framework-vue-testing.web.app


Nota:
- Hasta ahora la URL funciona bien!
- No se modifico home ni HelloWord debido a que al realizar las pruebas e2e generaba conflicto.