# Movie Challenge con Framework

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Consideraciones técnicas](#5-consideraciones-técnicas)
- [6. Criterios mínimos de aceptación del proyecto](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [7. Despliegue](#7-despliegue)


---

## 1. Preámbulo

CINE DECK es una plataforma que sirve como un catálogo en la cual los usuarios pueden visualizar, explorar, buscar o aprender sobre el mundo del cine, se pueden filtrar los nombres de las peliculas, o los años en que fueron lanzadas, así como también se, puede seleccionar alguno de los generos principales como Horror o Documentales, de esta manera se filtraran los gneeros existentes.

![Pelis]()

## 2. Resumen del proyecto

En este proyecto, creé una página web destinada a visualizar, filtrar y ordenar el catálogo de películas de la API: TMDB (The Movie data base)
Esta página puede servir como un catálogo de películas general, pero tambien tiene una funcion de busqueda para encontrar peliculas por nopmbre, una funciond e busqueda para encontar peliculas segun su anio de lanzamiento, para seleccionar peliculas populares de los generos favoritos de todos, y finalmente incluí una opción para visualizar las películas más populares en Japón, como un guiño al cine oriental y también al anime. 

Para implementar este proyecto elegí un framework (REACT)
Al elegir un _framework_ o _librería_ para mi interfaz, nos apoyamos en una
serie de convenciones e implementaciones _probadas_ y _documentadas_ para
resolver un problema común a toda interfaz web:
[_mantener la interfaz sincronizada con el estado_](https://medium.com/dailyjs/the-deepest-reason-why-modern-javascript-frameworks-exist-933b86ebc445).
Esto nos permite concentrarnos mejor (dedicar más tiempo) en las
características _específicas_ de nuestra aplicación.

Cuando elegimos una de estas tecnologías no solo importamos un pedacito de
código para reusarlo (lo cuál es un gran valor per se), si no que adoptamos una
**arquitectura**, una serie de **principios de diseño**, un **paradigma**, unas
**abstracciones**, un **vocabulario**, una **comunidad**, etc...

Como desarrolladora Front-end, estos kits de desarrollo pueden resultarte
de gran ayuda para implementar rápidamente características de los proyectos en
los que trabajes.

## 3. Objetivos de aprendizaje


Estos son los objetivos que he llegado a entender y aplicar en mi proyecto:

### HTML

- [x] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [x] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [x] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [x] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

- [ ] **Uso de CSS Grid Layout**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Grid - CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
  * [Grids - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
</p></details>

- [ ] **Uso de media queries**

  <details><summary>Links</summary><p>

  * [CSS media queries - MDN](https://developer.mozilla.org/es/docs/CSS/Media_queries)
</p></details>

### JavaScript

- [x] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [x] **Pruebas asíncronas**

  <details><summary>Links</summary><p>

  * [Tests de código asincrónico con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/asynchronous)
</p></details>

- [x] **Uso de mocks y espías**

  <details><summary>Links</summary><p>

  * [Manual Mocks con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/manual-mocks)
</p></details>

- [x] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **Netlify: Despliegue con netlify**

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

- [x] **GitHub: Organización en Github (projects | issues | labels | milestones | releases)**

### HTTP

- [x] **Consulta o petición (request) y respuesta (response).**
- [x] **Cabeceras (headers)**
- [x] **Cuerpo (body)**
- [x] **Verbos HTTP(GET)** 
- [x] **Códigos de status de HTTP**
- [ ] **Encodings y JSON**

### React

- [x] **JSX**

  <details><summary>Links</summary><p>

  * [Presentando JSX - Documentación oficial](https://es.react.dev/learn/writing-markup-with-jsx)
</p></details>

- [x] **Componentes y propiedades (props)**

  <details><summary>Links</summary><p>

  * [Componentes y propiedades - Documentación oficial](https://es.react.dev/learn/passing-props-to-a-component)
</p></details>

- [x] **Manejo de eventos**

  <details><summary>Links</summary><p>

  * [Manejando eventos - Documentación oficial](https://es.react.dev/learn/responding-to-events)
</p></details>

- [x] **Listas y keys**

  <details><summary>Links</summary><p>

  * [Listas y keys - Documentación oficial](https://es.react.dev/learn/rendering-lists)
</p></details>

- [x] **Renderizado condicional**

  <details><summary>Links</summary><p>

  * [Renderizado condicional - Documentación oficial](https://es.react.dev/learn/conditional-rendering)
</p></details>

- [x] **Elevación de estado**

  <details><summary>Links</summary><p>

  * [Levantando el estado - Documentación oficial](https://es.react.dev/learn/sharing-state-between-components)
</p></details>

- [x] **Hooks (USEffect)**

  <details><summary>Links</summary><p>

  * [Presentando Hooks - Documentación oficial](https://es.react.dev/reference/react)
</p></details>

- [x] **CSS modules**

  <details><summary>Links</summary><p>

  * [Adding a CSS Modules Stylesheet - Documentación de Create React App (en inglés)](https://vitejs.dev/guide/features.html#css-modules)
</p></details>


- [x] **Getters y Setters**

  <details><summary>Links</summary><p>

  * [Documentación oficial de Typescript](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters)

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

## 4. Consideraciones generales

Este proyecto se debe "resolver" de manera individual.

El rango de tiempo estimado para completar el proyecto es de 2 a 3 Sprints.

Los tests unitarios deben cubrir un mínimo del 90% de _statements_, _functions_,
_lines_ y _branches_.

Por otro lado, deberás definir la estructura de carpetas y archivos que consideres
necesaria. Puedes guiarte de las convenciones del _framework_ elegido. Por ende,
los _tests_ y el _setup_ necesario para ejecutarlos, serán hechos por ti.

## 5. Consideraciones técnicas

La aplicación debe ser un _Single Page App_.

La aplicación no debe ser _responsive_.

Para poder usar la API de
[_The Movie Database API V3_](https://developer.themoviedb.org/docs)
deberás crear una cuenta, luego
una llave (_key_) de acceso y usarla en cada petición
que hagas al servidor. Recuerda que tienes un máximo
de 1.000 peticiones diarias a la APIs por cada
[IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP),
creemos que es suficiente, pero te recomendamos hacer un uso
responsable de este recurso gratuito.

Uno de los mayores objetivos de este proyecto es aprender a usar una librería o
framework popular para desarrollar una web app.
Debes elegir entre [React](https://es.react.dev/) o [Angular](https://angular.io/).

Ten en cuenta que si eliges Angular, tienes la obligación de usar [TypeScript](https://www.typescriptlang.org/).
_Typescript_ es un lenguaje de programación fuertemente tipado basado en
javascript.

Si eliges React, la decisión de usar Typescript es opcional (pero te lo
recomendamos!). Aquí puedes encontrar más información en relación a cómo iniciar
tu proyecto con [Typescript y React](https://itnext.io/create-react-v18-typescript-project-with-vite-d0d602e4a60e).

La aplicación debe hacer uso de `npm-scripts` y contar con scripts `start`,
`test`, `build` y `deploy`, que se encarguen de arrancar, correr las pruebas,
empaquetar y desplegar la aplicación respectivamente.

## 6. Criterios mínimos de aceptación del proyecto

### Prototipo de baja fidelidad

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos entrega una primera iteración del prototipo de baja fidelidad
de la aplicación en [esta imagen](./docs/movie-list.png) y esta [otra](./docs/movie-detail.png).

### Definición del producto

El [_Product Owner_](https://www.youtube.com/watch?v=r2hU7MVIzxs&t=202s)
nos presenta este _backlog_ que es el resultado de su trabajo con el clientx
hasta hoy.

---

#### [Historia de usuario 1] Listado de películas

Yo como usuaria quiero visualizar en un tabla (filas y columnas) el catálogo de películas

##### Criterios de aceptación

- Se debe usar el _endpoint_ [/discover/movie](https://developer.themoviedb.org/reference/discover-movie).
- La aplicación cuenta con una paginación para explorar el catálogo por páginas.
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 2] Filtro y ordenamiento

Yo como usuaria quiero filtrar y ordenar el catálogo de películas usando
los criterios soportados por _TheMovie Database API V3_

##### Criterios de aceptación

- Para filtrar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _with_genres_.
- Para ordenar se debe usar el _endpoint_
[/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y alguno de sus parámetros como por ejemplo _sort_by_.
- La paginación debe conservar el filtro y ordenamiento
- Para cada película se debe mostrar como mínimo:
poster, título original y año de lanzamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

#### [Historia de usuario 3] Detalle de una película

Yo como usuaria quiero consultar los detalles de una película

##### Criterios de aceptación

- Se debe usar el _endpoint_
[/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Para la película se debe mostrar como mínimo: poster, título original,
año de lanzamiento, géneros, promedio de votación y total de votos.
- La interfaz debe permitir retornar al listado de películas conservando
el filtro y ordenamiento.

##### Definición de terminado

- Los componentes desarrollados deben contar con test unitarios.

---

## 7. Despliegue

Puedes elegir el proveedor (o proveedores) que prefieras junto
con el mecanismo de despligue y estrategia de alojamiento.
Te recomendamos explorar las siguientes opciones:

- [Netlify](https://www.netlify.com/) al igual que Vercel, es una
plataforma de _despliegue_ que nos permite desplegar nuestra aplicación
web estática (HTML, CSS y JavaScript) y también nos permite desplegar
aplicaciones web que se ejecutan en el servidor (Node.js).

## 8. Consideraciones para pedir tu Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

- [ ] Protipo de alta fidelidad en Figma
- [x] Cumple con todos los [criterios mínimos de aceptación](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [x] Está subido a GitHub
- [x] Esta [desplegado](#7-despliegue)
- [x] Tiene un README con la definición del producto.

### Prototipo de alta fidelidad

Tomando como base el prototipo de baja fidelidad entregado, crea uno de alta
fidelidad en Figma. Define una paleta de colores y un diseño grafico. Procura
que esto te tome entre 1 o 2 días.
### Frameworks / libraries

- [React](https://react.dev/)
- [ViteJs](https://vitejs.dev/)
