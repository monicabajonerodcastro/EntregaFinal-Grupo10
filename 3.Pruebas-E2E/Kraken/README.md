# Kraken-GhostV.5.22.11
Para más información acerca de la herramienta, ingrese [aquí](https://thesoftwaredesignlab.github.io/Kraken/)

## Requerimientos

|                  | Version          |
|------------------|------------------|
| NPM              | 6.13.14          |
| Node             | 12.16.1          |
| Android Studio   | Dolphin 2021.3.1 |
| Ghost            | 5.22.11          |

- Asegurese de tener instalado Ghost
- Ghost 5.22.11 debe estar iniciado y corriendo en http://localhost:2369/ghost
- Tener un usuario creado en su ambiente local de Ghost


## Instalación 
Si no tiene instalada la herramienta kraken, lo puede hacer abriendo una terminal e ingresando el siguiente comando:
```bash
npm install kraken-node -g
```
*Fuente: [Cómo utilizar la herramienta kraken](https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#2) de Software Design Lab*
**Instalación del proyecto**

1. Instale las siguientes dependendencias dentro la carpeta "Kraken"
```bash
npm install chai
```
2. Exporte en PATH (Linux) o incluya en el PATH de las varables de entorno (Windows) la ruta bin del SDK de Android
*Nota: Si no conoce la ruta de instalación del SDK de Android, abra Android Studio e ingrese a Settings, en la seccion Appearance & Behavior seleccione la subsección System Settings y dirijase a Android SDK. Allí encontrará la ruta donde se encuentra instalado el SDK en el campo Android SDK Location.*
3. Dentro de la carpeta Kraken de este proyecto, encontrará el archivo *properties.json*, reemplace en este archivo los valores de las propiedades *USERNAME* y *PASSWORD* con el usuario y contraseña creó anteriormente en Ghost.
## Ejecución
Para la ejecución, debe tener en cuenta que se debe utilizar el archivo *kraken-node* que se instaló de manera global. Para esto, debe usar la ruta relativa de la instalación, ejecutandolo desde la carpeta Kraken de éste proyecto.
```bash
./node_modules/kraken-node/bin/kraken-node run
```

## Consideraciones
En la carpeta *reports* encontrará los resultados de cada ejecución que realice con la herramienta. Por defecto encontrará:
- *Crear-Post*: Resultados de una ejecución exitosa de la funcionalidad "Crear Post" con sus escenarios.
- *Crear-Tag*: Resultados de una ejecución exitosa de la funcionalidad "Crear Tag" con sus escenarios.

Para la correcta visualización de los repotes, abra el archivo *index.html* de cada carpeta, en su explorador e interactue con el reporte desde allí.
