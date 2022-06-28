# TUITER
***
Esté projecto es un clon de twitter, con sus funcionalidades básicas.\
 Se necesita que el usuario este logueado para poder usar la aplicación, el usuario puede iniciar sesión con email o usando su cuenta de google,facebbok o github.\
 La aplicación cuenta con funcionalidades básicas acerca de lo que puede hacer el usuario:
  - se pueden crear publicaciones con texto e imagenes en ella.
  - se puede dar like, comentar o compartir cualquier publicación.
  - un usuario puede seguir o dejar de seguir a otro usuario para tener o no sus publicaciones en el inicio de la aplicación.
  - el usuario puede eliminar su cuenta en cualquier momento

  ## Tecnologías
  * [Next.js](https://nextjs.org/): Version 12.1.5
  * [Firebase](https://firebase.google.com/?hl=es) Version 9.8.1

  ## Demo
   Puedes probar un demo de esta aplicación visitando [che-tuiter.vercel.app](https://che-tuiter.vercel.app/) 

  ## instalación
   antes de instalar los modulos necesarios y ejecutar cualquier script debes tener una cuenta en Firebase y colocar todos los llaves de acceso y configuracion de tu proyecto de firebase (tanto de cliente como administrador) en un archivo .env y no tiene que ser público.\
   para mas información acerca de las variables de ambiente en Next.js puedes visitar [nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables).\
   Una vez clonado el proyecto y con el archivo .env con la configuración necesaria puedes ejecutar los siguientes scripts:.\
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
![](/public/screenshot_login.jpg)
![](/public/screenshot_home.jpg)
![](/public/screenshot_profile.jpg)