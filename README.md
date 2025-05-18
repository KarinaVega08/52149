# 52149
# Analizador de Metadatos con ANTLR4 y JavaScript

Este proyecto implementa un analizador léxico y sintáctico de archivos de metadatos usando [ANTLR4](https://www.antlr.org/) y JavaScript. Permite procesar archivos de texto con metadatos estructurados, mostrar el análisis léxico, sintáctico, el árbol de análisis y traducir los datos a una variable JavaScript.

---

## Instalación

### *Requisitos previos*

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Java JRE/JDK](https://adoptium.net/) (para ejecutar ANTLR)
- [ANTLR4](https://www.antlr.org/download.html) (descargar el .jar y ubicarlo en la raíz del proyecto)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

### *Pasos*

1. *Clona el repositorio:*

   
https://github.com/KarinaVega08/52149.git

2. **Ejecuta el analizador**
node [index.js](http://_vscodecontentref_/0)

3. **¿Qué hace cada cosa?**
   **Gramatica.g4**
Define la gramática del lenguaje. Especifica los campos válidos, el formato de los valores y la estructura general del archivo.
**generated/**
Contiene los archivos generados automáticamente por ANTLR4 a partir de la gramática. Incluye el lexer, parser y visitor. No edites estos archivos a mano.
   **CustomGramaticaVisitor.js**
Implementa la lógica para recorrer el árbol sintáctico generado por ANTLR y construir un objeto JavaScript con los metadatos extraídos.
   **index.js**
Script principal que:
    Lee el archivo de entrada (input.txt)
    Ejecuta el análisis léxico y muestra la tabla de tokens
    Ejecuta el análisis sintáctico y muestra el árbol
    Interpreta los datos y los traduce a una variable JavaScript
**input.txt**
Archivo de entrada. Debe seguir el formato definido en la gramática.

4. **NOTAS**
Si modificas la gramática (metadata.g4), debes volver a generar los archivos ANTLR con el comando indicado en la sección de instalación.

El archivo de entrada no debe tener espacios antes del nombre del campo.

Si hay errores de formato (campos desconocidos, falta de punto y coma, etc.), el analizador los reportará en consola.

El proyecto está pensado para ejecutarse desde la terminal. El soporte de depuración en VS Code depende del plugin de ANTLR y no es necesario para el uso básico.

El Arbol lo mostrara al ejecutar la gramatica (Gramatica.g4) con F5.

## Uso de ejemplos

Puedes ejecutar cualquier archivo de ejemplo directamente desde la terminal usando:
npm start [correcto1.txt](http://vscodecontentref/1)

o para otro ejemplo:

npm start [incorrecto2.txt](http://vscodecontentref/2)

## Requisitos para que funcione este comando
## Node.js instalado.
# Dependencias instaladas con:  npm install
