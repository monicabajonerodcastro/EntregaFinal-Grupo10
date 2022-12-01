# Playwright-GhostV5.22.11
Para más información acerca de la herramienta, ingrese [aquí](https://playwright.dev/)

## Prerequisistos:

- Descargar el repositorio
- Tener instalado Ghost 5.22.11
- Ghost 5.22.11 está en ejecución 
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
3. Asegurese que Ghost 5.22.11 está en ejecución y se despliega en 
4. Corra el siguiente comando en consola
```bash
node index.js
```
5. Ingrese el email, contraseña y la versión de ghost solicitados

