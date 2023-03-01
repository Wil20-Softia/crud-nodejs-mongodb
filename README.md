## Inciando el proyecto con Nodejs
- Ejecutar: npm init -y

## Paquetes a utilizar en el proyecto
- Ejecutar el siguiente comando: npm i express express-handlebars mongoose morgan
- " Son las dependencia que se utilizaran para la construccion del proyecto "

- Instalando las dependencias de desarrollo:
- Ejecutar: npm i -D @babel/cli @babel/core @babel/node @babel/preset-env nodemon

## Crear un archivo en el directorio principal para configurar babel
- .babelrc

## Crear una carpeta o directorio src para colocar el codigo principal del proyecto

- Para poder ejecutar codigo de javascript moderno con node entonces utlizamos el siguiente comando:
-- npx babel-node src/index.js

## Configuramos un comando mas comodo para ejecutar el archivo raíz.
1. Nos dirigimos a package.json y en la sección de "scripts" la limpiamos.
2. Agregamos un comando nuevo: "start": "babel-node src/index.js"
3. Ahora para ejecutar nuestro programa haremos los siguiente en la consola: npm start

## Arreglamos el comando "start" para que nos funcione y se nos actualice automaticamente cuando estemos haciendo cambios en el proyecto
- Colocar el siguiente script: nodemon src/index.js --exec babel-node

- * Cambiar el "start" por "dev" ---> ya que estaremos utilizando los modulos solo para desarrollo y no para la producción

## Instalar en el VSC Prettier Format para formatear el codigo Javascript
## Instalar en el VSC Material Icon para darle iconos a las carpetas

## ********* ESTRUCTURA DE ARCHIVOS DEL PROYECTO:
- src/routes --> Es donde se econtraran todas las rutas de nuestro proyecto