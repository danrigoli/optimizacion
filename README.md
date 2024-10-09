# Proyecto con Optimización
Este proyecto de Node.js y Express, utiliza Webpack para la optimización de archivos. Se aplican técnicas de bundling, minificación y compresión para mejorar el rendimiento y reducir el tamaño de los archivos servidos al cliente.

## Características
- Bundling: Agrupa archivos JavaScript y CSS en un solo archivo para reducir las solicitudes HTTP.
- Minificación: Elimina espacios en blanco, comentarios y renombra variables para reducir el tamaño del código.
- Compresión: Aplica compresión Gzip en el servidor para disminuir el tamaño de los archivos transmitidos.

## Requisitos
- NVM

## Instalación
Para clonar el repositorio, instalar dependencias y ejecutar el proyecto localmente:

### Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/nombre-del-repositorio.git
cd optimizacion
```
### Instalar dependencias:
```bash
nvm use # Selecciona la versión de Node.js
npm install
```
## Scripts
```bash
npm run build: Genera el bundle minificado de los archivos JavaScript y CSS en la carpeta dist.
npm start: Inicia el servidor Express y sirve los archivos comprimidos.
```

## Optimización Aplicada

### Bundling
Webpack agrupa los archivos CSS y JavaScript en un solo archivo (bundle.js), lo que reduce las solicitudes HTTP al servidor.

### Minificación
La minificación se realiza mediante TerserPlugin (JavaScript) y css-loader (CSS), eliminando espacios en blanco, comentarios y renombrando variables.

### Compresión
El servidor Express usa el middleware compression para aplicar compresión Gzip a todos los archivos enviados, reduciendo aún más el tamaño de la transferencia de datos.