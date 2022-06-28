# TUITER
***
Esté proyecto es un clon de Twitter, con sus funcionalidades básicas.\
 Se necesita que el usuario este registrado para poder usar la aplicación, el usuario puede registrarse con email o usando su cuenta de Google, Facebook o Github.\
La aplicación cuenta con funcionalidades básicas acerca de lo que puede hacer el usuario:
  - Se pueden crear publicaciones con texto e imágenes en ella.
  - Se puede dar like, comentar o compartir cualquier publicación.
  - Un usuario puede seguir o dejar de seguir a otro usuario para tener o no sus publicaciones en el inicio de la aplicación.
  - El usuario puede eliminar su cuenta en cualquier momento

  ## Tecnologías
  * [Next.js](https://nextjs.org/): Version 12.1.5
  * [Firebase](https://firebase.google.com/?hl=es) Version 9.8.1

  ## Demo
   Puedes probar un demo de esta aplicación visitando [che-tuiter.vercel.app](https://che-tuiter.vercel.app/) 

  ## instalación
   Antes de instalar los módulos necesarios y ejecutar cualquier script debes tener una cuenta en Firebase y colocar todos las llaves de acceso y configuración de tu proyecto de Firebase (tanto de cliente como administrador) en un archivo .env y no tiene que ser público.\
   para mas información acerca de las variables de ambiente en Next.js puedes visitar [nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables).\
   Una vez clonado el proyecto y con el archivo .env con la configuración necesaria puedes ejecutar los siguientes scripts:
   ```bash
npm install : para instalar las depencias necesarias
```

 ```bash
npm run dev : inicia el proyecto en modo desarrollo
```

 ```bash
npm run build : compila todo el proyecto y tenerlo listo para producción
```

 ```bash
npm start : inicia el proyecto en modo producción
```
## capturas
![](/public/screenshot_login.JPG).\
![](/public/screenshot_home.JPG).\
![](/public/screenshot_profile.JPG)
