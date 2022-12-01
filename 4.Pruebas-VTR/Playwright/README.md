# Playwright - Ghost V3.42
Para más información acerca de la herramienta, ingrese [aquí](https://playwright.dev/)

## Prerequisistos:

- Descargar el repositorio
- Tener instalado Ghost 3.42
- Ghost 3.42 está en ejecución y se despliega en http://localhost:3001/
- Tener un usuario administrador creado y activo
- Versión de Node.js 14.20.x instalada en su computadora y dependencia Playwright
- Versión del manejador de paquetes npm 6.14.xx instalada en su computadora.
- Tener instalado node y la dependencia Playwright

## Ejecución:

1. Ubiquese dentro de la carpeta playwright del repositorio
2. Ingrese al archivo index.js y modifique el valor de la constante "url" por la dirección donde se encuentra ejecutandose Ghost (Ej: http://localhost:2369/ghost )
3. Asegure que la dependencia Playwright está instalada mediante el comando 
```bash
npm install playwright
```
4. Asegurese que Ghost 3.42 está en ejecución y se despliega en http://localhost:3001/
5. Corra el siguiente comando en consola
```bash
node index.js
```
6. Ingrese el email y contraseña solicitados
