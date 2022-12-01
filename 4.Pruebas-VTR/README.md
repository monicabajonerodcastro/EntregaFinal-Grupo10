# 4. Pruebas VTR

### Requisitos
- Tener instalado y corriendo Ghost version 5.22.11
- Tener instalado y corriendo Ghost version 3.42

### Backstop:
Recuerde que debe tener instalado Backstop en su máquina local.
*Instrucciones: *
1. Ejecutar los casos de la carpeta EntregaFinal-Grupo10/3.Pruebas-E2E tanto en Kraken como en Playwrigth. Este paso ejecuta los casos de prueba en la versión 5.22.11 de Ghost.
2. Ejecutar los casos de la carpeta EntregaFinal-Grupo10/4.Pruebas-VTR tanto en Kraken como en Playwrigth. Este paso ejecuta los casos de prueba en la versión 3.42 de Ghost.
3. Ubicarse en la carpeta EntregaFinal-Grupo10/4.Pruebas-VTR/Backstop
4. Ejecutar el siguiente comando:
```bash
backstop reference --configPath=index.js
```
6. Luego que el comando anterior finalice, ejecutar el siguente comando:
```bash
backstop test --configPath=index.js
```
7. El reporte se abrirá automáticamente en su explorador predeterminado. En caso de que no se abra el reporte, ejecute el siguiente comando:
```bash
backstop openReport --configPath=index.js
```
