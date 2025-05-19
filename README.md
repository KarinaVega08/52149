# 52149
# Analizador 

Este proyecto implementa un analizador léxico y sintáctico de archivos usando [ANTLR4](https://www.antlr.org/) y JavaScript. Permite procesar archivos de texto con metadatos estructurados, mostrar el análisis léxico, sintáctico, el árbol de análisis y traducir los datos a una variable JavaScript.

---

### *Requisitos previos*

- [Node.js](https://nodejs.org/) (v16 o superior)
- [Java JRE/JDK](https://adoptium.net/) (para ejecutar ANTLR)
- [ANTLR4](https://www.antlr.org/download.html) (descargar el .jar y ubicarlo en la raíz del proyecto)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

### *Pasos*

1. *Abre una terminal o consola de comandos (cmd).*
2. *Ubícate en la carpeta donde quieras tener el proyecto.
(git clone)* 
3. *Ejecuta el siguiente comando para clonar el repositorio:*
   https://github.com/KarinaVega08/52149.git
4. Una vez clonado, entra en la carpeta del proyecto
    cd 52149
5. Abre VS Code para trabajar con el código del proyecto. Para esto ejecuta en la ventana de comandos abierta
   code .


6. **Ejecuta el analizador**
node index.js
7. *Para comprobar los ejemplos correctos e incorrectos reemplazalos en input.txt y aparecerá el error que tienen o en su defecto funcionarán correctamente.

 **¿Qué hace cada cosa?**
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
Si modificas la gramática (Gramatica.g4), debes volver a generar los archivos ANTLR con el comando indicado en la sección de instalación.

El archivo de entrada no debe tener espacios antes del nombre del campo.

Si hay errores de formato (campos desconocidos, falta de punto y coma, etc.), el analizador los reportará en consola.

El proyecto está pensado para ejecutarse desde la terminal. El soporte de depuración en VS Code depende del plugin de ANTLR y no es necesario para el uso básico.

El Arbol lo mostrara al ejecutar la gramatica (Gramatica.g4) con F5.

## Requisitos para que funcione este comando: Node.js instalado.

# Dependencias instaladas con:  npm install
