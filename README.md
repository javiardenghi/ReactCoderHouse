# Mi e-Commerce:
- ## Proyecto Coder House - React Js

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png)](https://es.reactjs.org/)


Mi e-commerce es un proyecto que corre con ReactJs para desplegar una pagina del tipo tienda Online en la cual el usuario puede realizar las acciones necesarias para poder realizar una compra en la tienda.
Este proyecto esta armado de tal forma que en un futuro pueda ser escalable y se le pueda seguir agregando componentes y funciones tanto de react como de firebase para una mejor experiencia del usuario.
> Mediante los componentes de React-Boostrap en su version 5.1 se le
dio el estilo al proyecto ademas de tener un archivo de CSS propio 
para detallar algunos elementos en particular de la pagina que no vienen
incluidos en React-Bootstrap

## Features

- Desplegar un catalogo de productos previstos desde una base de datos externa
- Poder ver detalle de cada producto en particular
- Filtrar resultados de la base de dato por categorias
- Ver en todo momento la cantidad de objetos agregados al carro de compras
- Agregar productos al carro de compra y que no se vayan repitiendo si se agrega el mismo
producto mas de una vez
- Visualizar el Precio total de la compra
- Poder borrar un elemento o todos del carrito
- Emitir una orden de compra llenando los datos en un formulario
- Emicion de id de compra unica para cada una


## Tecnologias

Para el proyecto se utilizaron las siguientes Herramientas:

- React - Framework de JavaScript para construir Interfaces de Usuario
- React-Bootstrap - Libreria de Estilos compatible con React
- Node - Entorno de ejecucion para Javascript.
- Npm - Administrador de paquetes para Node
- Firebase (firestore) - Base de datos que utiliza el proyecto
- Github - Para guardar el Proyecto


Repositorio Publico con el codigo del proyecto: https://github.com/javiardenghi/proyecto1

## Instalacion

El proyecto requiere  [Node.js](https://nodejs.org/) y [Git](https://git-scm.com/)
Una vez instaladas e inicializadas estas Herramientas, Clonar el repositorio del Proyecto.
Dentro de cmd colocar:

```sh
cd (carpeta donde guardar proyecto)
git clone https://github.com/javiardenghi/proyecto1
```

## Iniciar Proyecto

### Opcion 1:
- Dentro de cmd colocar:
```sh
cd (carpeta donde clono el repositorio)
cd carpeta/proyecto-coder/
npm start
```
### Opcion 2:
- Si no clono el repositorio puede entrar a: https://keen-bohr-dc8829.netlify.app/

# Development

## React JS

Se utilizo la version: 16.5.0
Hooks Utilizados:
- useState
- useEffect
- React Router
- useContext
## Firebase:
- Se utilizo la Herramienta Firestore como base de datos para cargar
los productos vistos en la pagina y recibir las ordenes de compra de los usuarios
## React-Bootstrap
- Version: 5.1
- Se utilizo para incorporar los estilos a los componentes correspondientes
- Tambien se modificaron ciertos elementos con CSS
## Node 
- Version: 14.18.0