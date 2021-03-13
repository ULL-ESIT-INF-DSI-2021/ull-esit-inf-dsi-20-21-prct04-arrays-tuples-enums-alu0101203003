# Práctica 4: Arrays, tuplas y enumerados. Informe.
## Desarrollo de Sistemas Informáticos 
## Raúl Martín Rigor - alu0101203003@ull.edu.es

### Introducción

En este informe se resumen las actividades realizadas en la **práctica 4** para poner en práctica nuestros conocimientos de TypeScript sobre tipos de datos que son utilizados para agrupar elementos (arrays, tuplas y enumerados) a través de la implementación de distintas funciones en una serie de ejercicios.

### Objetivos

Al finalizar la práctica, habremos completado los siguientes objetivos:

* Realizar pruebas unitarias para nuestras funciones con las herramientas *Mocha* y *Chai*
* Documentar nuestro progreso con la herramienta *TypeDoc*
* Adquirir conocimientos sobre manejo, operacion y manipulación de arreglos de datos en TypeScript
* Saber comparar elementos entre distintos arreglos
* Manipular y modificar conjuntos de elementos.

### 1. Creación y configuración del driectorio del proyecto.

#### 1.1. Estructura inicial

Con el fin de preparar una estructura adecuada para realizar para nuestro proyecto seguiremos el mismo proceso llevado a cabo en la [práctica 3](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101203003.git) para la creación de la estructura inicial.

En adición a lo anterior, instalaremos en nuestro proyecto otros servicios que nos serán de utilidad (que se explicarán en los siguientes puntos), por lo que la estructura quedará un poco diferente:

<img src="img/Captura1a.PNG" alt="" height="250"/> <img src="img/Captura1b.PNG" alt="" /> <img src="img/Captura1c.PNG" alt="" />


#### 1.2. Instalación y configuración de TypeDoc

Instalaremos el servicio de [TypeDoc](https://typedoc.org/ ) que nos ayudará a generar automáticamente la documentación de nuestro proyecto siguiendo los pasos del [tutorial disponible en el campus virtual](https://campusingenieriaytecnologia.ull.es/mod/url/view.php?id=288597).

Añadiremos la linea `"doc": "typedoc"` al package.json para poder usar la herramienta, especificaremos la rutas de los ejercicios que queremos documentar al ejecutar el comando `npm run doc`. Podremos ver la documentación generada gracias a la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):

<img src="img/Captura1.PNG" alt="" /> <img src="img/Captura2.PNG" alt=""/> <img src="img/Captura3.PNG" alt="" /> <img src="img/Captura5.PNG" alt="" />

#### 1.3. Instalación y configuración de Mocha

De esta práctica en adelante usaremos la metodología TDD de desarrollo de pruebas unitarias, para lo que nos ayudaremos de las herramientas [Mocha]( https://mochajs.org/) y [Chai](https://www.chaijs.com/).

Los pasos que llevaremos a cabo para el desarrollo de estas pruebas serán:

* Crear la prueba unitaria para la función
* La prueba fallará porque la función no está implementada
* Implementaremos el código necesario para que funcione
* La prueba funcionará

Las pruebas se desarrollan en el directorio test y los funciones se encuentran, como de costumbre, en el directorio src, el cual aloja el código fuente.

Estas pruebas se ejecutan con el comando `npm test` que mostrará si se cumplen las espectativas especificadas o donde se encuentran los errores.

<img src="img/Captura7.PNG" alt="" /> <img src="img/Captura6.PNG" alt=""/> <img src="img/Captura8.PNG" alt="" />

