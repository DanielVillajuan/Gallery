
# Galeria de imagenes

En una coleccion de imagenes, podras seleccionar las favoritas y visualizarlas en un solo lugar.






## Instalación

con npm

```bash
  npm install
```

con pnpm

```bash
  pnpm install
```

con yarn

```bash
  yarn install
```

## Variables de entorno

Crear archivo en la raiz del proyecto ```.env.local``` e insertar

```bash
    VITE_APP_BASE_URL=https://picsum.photos/
    VITE_APP_ENDPOINT_LIST=v2/list
    VITE_APP_ENDPOINT_ID=id/
    VITE_APP_ENDPOINT_DETAILS=/info
```
## Referencia de API

#### Lista de imagenes

```http
  GET https://picsum.photos/v2/list
```

#### Detalle de imagen

```http
  GET /id/${id}/info
```

| Parametro | Tipo     | Descripción                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Requerido**. Id de la imagen a traer |

Para saber mas sobre la api, [aquí](https://picsum.photos/).


## Test

Para ejecutar los test

```bash
  npm run test
```


## Deploy

Proyecto deployado en [Vercel](https://vercel.com/docs), url web [www.galleryimages.app/](https://galleryimages-kappa.vercel.app/)

## Stack

**Cliente:** React, Typescript

**Manejador de Estados:** React Query, Zustand

**Test:** Vitest, React Testing library

**Estilos:** MaterialUI

**Nube:** Vercel

