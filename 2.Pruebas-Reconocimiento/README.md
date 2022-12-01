# 2. Pruebas exploratorias

Monkey (Smart)

### Requisitos
- npm version 6.14.17
- node version 14.20.1
- Cypress

### Configuración del ambiente
1. En el archivo smart-monkey-config.json, modifique las siguiente propiedad:
- Propiedad "baseUrl": URL donde esta ejecutandose su instancia de ghost (Ej.: http://localhost:2371/ghost/ )

2. En el archivo cypress/integration/monkey/smart-monkey.js modifique el valor de las siguientes constantes:
- userName (línea 25): Usuario previamente creado, con el cual se puede acceder al dashboard de administración de Ghost.
- password (linea 26): Contraseña del usuario con el cual se puede acceder al dashboard de administración de Ghost.

3. En esta carpeta (EntregaFinal-Grupo10/2.Pruebas-Reconocimiento) ejecute el comando:
```bash
npm install
```
Esto descargará las dependencias necesarioas para 

4. En la misma carpeta (EntregaFinal-Grupo10/2.Pruebas-Reconocimiento) ejecute el comando:
```bash
node_modules/.bin/cypress run -C smart-monkey-config.json
```
Este comando ejecutará las pruebas exploratorias.

5. En la carpeta results podra encontrar una página HTML (monkey-execution.html) en el que podrá visualizar los eventos generados por Cypress y el Monkey
6. En la carpeta results, también encontrará un video (smart-monkey-js.mp4) el cual le mostrará los eventos generados en la GUI del navegador.