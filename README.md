# api-text
API para la transformación de texto.

Esta API puede funcionar independiente pero fue creada para atender las peticiones del sitio web [front-text](https://github.com/felifranco/front-text).


Se ha configurado de tal forma en que sólo es necesario tener docker y sus herramientas instaladas en el equipo para poder ejecutarlo, se utiliza la imagen [NodeJS v12](https://github.com/nodejs/docker-node/blob/31246f5f779cafa0930a1db04bd00d875d6a940d/12/stretch/Dockerfile) para correr el proyecto.

## Variables de entorno
Se utiliza el paquete [dotenv](https://www.npmjs.com/package/dotenv) para manejar las variables de entorno, para este proyecto se tienen configuradas 4 variables:

![dotenv](/docu/dotenv.png)


## Docker Compose
Luego de descargar éste repositorio y estar dentro de la carpeta del proyecto se puede ejecutar el comando 
```
sudo docker-compose up -d && sudo docker-compose logs -f service
```
Comandos:
* **up**: Creamos e iniciamos los contenedores
* **logs**: Muestra la salida de consola del contenedor recién creado.

En la salida última de consola se podrá visualizar la ruta en la que se encuentra la documentación:

![Salida de consola](/docu/compose-log.png)

## Documentación de los endpoints

Se utilizó [Swagger](https://www.npmjs.com/package/swagger) para documentar los endpoints disponibles en API-TEXT. Swagger permite hacer las peticiones directamente desde ahí:

![swagger](/docu/swagger.png)

## Scripts configurados
El proyecto tiene configurado dos scripts:
1. **npm start**: Permite ejecutar el servicio.
2. **npm test**: Ejecuta las pruebas al proyecto.