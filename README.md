# CIPHER

*CIPHER es el primer proyecto desarrollado dentro del Bootcamp de Desarrollo Web de [Laboratoria](https://postula.laboratoria.la/scl?utm_source=instapage&utm_medium=referral&utm_campaign=main_page)*.

*Este proyecto tiene como objetivo crear una aplicación web donde el usuario pueda cifrar y descifrar un texto a través del desplazamiento de caracteres*.

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

## 2. Descripción del proyecto

* **Nombre de la aplicación**: `SAFER`

* **Problema abordado**: los [índices](https://ocac.cl/observatorio-contra-el-acoso-chile-lanza-primera-encuesta-nacional-sobre-acoso-sexual-en-chile/) en temas de acoso o violencia de género no van particularmente a la baja y una de las respuestas ante este tipo de situaciones es el silencio. Muchas veces la mujer afectada no quiere contarle a otros ante la posibilidad que su agresor pueda leer sus mensajes o que otra persona pueda acceder a ellos sin su consentimiento.

* **Usuaria objetivo**: mujeres que viven situaciones de riesgo de violencia de género

* **Necesidad de la usuaria**: un filtro adicional en sus mensajes para contar con una mayor privacidad

* **Respuesta al problema**: los servicios de mensajería ya cuentan con variadas opciones de seguridad y privacidad; sin embargo, en situaciones de riesgo, se requiere mayor protección. En este sentido, poder codificar el mensaje antes de enviarlo, permite agregar un filtro extra de seguridad si alguien del entorno de la persona afectada intenta acceder a sus mensajes.

* **Relación de las usuarias con el producto desarrollado**: gracias al cifrado, se pueden enviar mensajes sensibles y que no puedan ser leídos por otras personas de su entorno. 

### Proceso de definición del producto

En el README.md, cuéntanos cómo pensaste en los usuarios y cuál fue tu proceso
para definir el producto final a nivel de experiencia y de interfaz.

* Quiénes son los principales usuarios de producto.
* Cuáles son los objetivos de estos usuarios en relación con tu producto.
* Cómo crees que el producto que estás creando está resolviendo sus problemas.

* `Diseño UX - Experiencia de usuaria` incluye info sobre proceso y decisiones de diseño.

* `Diseño UI - Interfaz de usuaria`

  * La interfaz permite elegir el desplazamiento a usar en el
  cifrado/descifrado.
  * Interfaz permite escribir un texto para ser cifrado.
  * Interfaz permite escribir un texto para ser descifrado.
  * Interfaz muestra el resultado del descifrado correctamente.

  La interfaz de la usuaria permite:

* Seleccionar una destinataria del mensaje
* Elegir un número de desplazamiento indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

* ### Tecnologías utilizadas

  * HTML
  * CSS
  * Vanilla Javascript
  * Node.js

* cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

## 3. Objetivos de aprendizaje

### Objetivos logrados

#### HTML

* Uso de HTML semántico

#### CSS

* Uso de selectores de CSS

* Modelo de caja (box model): borde, margen, padding

#### WEB

* Uso de selectores del DOM

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
