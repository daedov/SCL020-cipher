# CIPHER

*CIPHER es el primer proyecto desarrollado dentro del Bootcamp de Desarrollo FrontEnd de [Laboratoria](https://postula.laboratoria.la/scl?utm_source=instapage&utm_medium=referral&utm_campaign=main_page)*.

*Este proyecto tiene como objetivo crear una aplicación web que donde el usuario pueda cifrar y descifrar un texto indicando un desplazamiento específico de caracteres*.

***

## Índice

* [1. ¿Qué es el cifrado CIPHER?](#1-¿-qué-es-el-cifrado-cipher-?)
* [2. Consideraciones generales](#2-consideraciones-generales)
* [3. Resumen del proyecto](#3-resumen-del-proyecto)
* [4. Consideraciones técnicas](#4-consideraciones-técnicas)
* [5. Objetivos de aprendizaje ogrados](#5-objetivos-de-aprendizaje-logrados)

***

## 1. ¿Qué es el cifrado CIPHER?

El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado y una de las técnicas más simples para codificar un mensaje, ya que se basa en la sustitución de caracteres.

Para cifrar una palabra, cada letra es reemplazada por otra letra que se encuentra en una posición fija dentro del mismo alfabeto.

Por ejemplo, si usamos un desplazamiento de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

## 2. Descripción del proyecto desarrollado

Su objetivo es ofrecer un espacio seguro para mujeres que sufren situaciones de riesgo o necesitan un filtro adicional para enviar sus mensajes de manera privada. Gracias al cifrado, pueden enviar mensajes sensibles y necesiten codificar mensajes para que estos no puedan ser leídos por otros usuarios.

* ### Especificaciones de la aplicación

  * `Diseño UX-UI` incluye info sobre proceso y decisiones de diseño.
  * `Usuario` explica claramente quiénes son los usuarios y su relación con
  el producto.
  * `Solución` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.

* `Diseño UI - Interfaz de usuaria`

  * La interfaz permite elegir el desplazamiento a usar en el
  cifrado/descifrado.
  * Interfaz permite escribir un texto para ser cifrado.
  * Interfaz permite escribir un texto para ser descifrado.
  * Interfaz muestra el resultado del descifrado correctamente.

* ### Tecnologías utilizadas

  * HTML
  * CSS
  * Vanilla Javascript
  * Node.js

## 3. Objetivos de aprendizaje

### Objetivos logrados

#### HTML

* Uso de HTML semántico

#### CSS

* Uso de selectores de CSS

* Modelo de caja (box model): borde, margen, padding

* Uso de selectores del DOM

#### WEB

* Manejo de eventos del DOM (listeners, propagación, delegación)

* Manipulación dinámica del DOM

#### Javascript

* Tipos de datos primitivos

* Strings (cadenas de caracteres)

* Variables (declaración, asignación, ámbito)

* Uso de condicionales (if-else, switch, operador ternario, lógica booleana)

* Uso de bucles/ciclos (while, for, for..of)

* Funciones (params, args, return)

* Pruebas unitarias (unit tests)

* Módulos de ECMAScript (ES Modules)

* Uso de linter (ESLINT)

* Uso de identificadores descriptivos (Nomenclatura y Semántica)

### Control de Versiones Git y GitHub

* Git: Instalación y configuración

* Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)

* GitHub: Creación de cuenta y repos

### User-centricity

* Diseñar un producto o servicio poniendo a la usuaria en el centro

### Product-design

* Seguir los principios básicos de diseño visual

### Definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

### Interfaz de usuario (UI)

La interfaz de la usuaria permite:

* Seleccionar una destinataria del mensaje
* Elegir un número de desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Dudas

* cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

## 7. Consideraciones técnicas

```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── cipher.spec.js
```
