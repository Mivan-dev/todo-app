# T-App

Aplicación web de tareas desarrollada con Angular 20. Permite crear, consultar, editar, completar y eliminar tareas desde el navegador.

## Requisitos

- Node.js y npm instalados.
- Un navegador moderno.

Puedes comprobar que están disponibles con:

```bash
node --version
npm --version
```

## Instalación

Clona o descarga el proyecto, entra en su carpeta raíz e instala las dependencias:

```bash
cd todo-app
npm install
```

## Puesta en marcha

Inicia el servidor de desarrollo:

```bash
npm start
```

Abre [http://localhost:4200/](http://localhost:4200/) en el navegador. La aplicación se recarga automáticamente al modificar el código.

## Uso de la aplicación

1. Al abrir la aplicación se muestran tareas de ejemplo si todavía no existen datos guardados.
2. Pulsa **Add +** para crear una tarea.
3. Completa el título, la descripción y, opcionalmente, la URL de una imagen. El título requiere al menos 3 caracteres y la descripción al menos 10.
4. Pulsa **Guardar** para añadir la tarea o **Cancelar** para cerrar el formulario.
5. Usa **Editar** en una tarea para modificar sus datos.
6. Cambia el interruptor de estado para marcarla como **Completada** o **Pendiente**.
7. Pulsa **Eliminar** para quitar una tarea.

Los datos se guardan en el `localStorage` del navegador. Por eso permanecen al recargar la página, pero son independientes para cada navegador y dispositivo. Para empezar de nuevo, borra los datos del sitio desde las herramientas de desarrollo del navegador.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo en el puerto 4200. |
| `npm run build` | Genera una compilación optimizada en `dist/`. |
| `npm run watch` | Compila en modo desarrollo y observa cambios. |
| `npm test` | Ejecuta las pruebas unitarias con Karma y Jasmine. |

## Compilación para producción

Genera los archivos listos para publicar con:

```bash
npm run build
```

El resultado se crea en `dist/todo-app/`. Publica el contenido de esa carpeta en un servidor de archivos estáticos que permita el fallback de rutas hacia `index.html`.

## Estructura principal

```text
src/app/
├── features/       # Vistas para agregar, editar, ver y listar tareas
├── layout/         # Barra superior y pie de página
└── shared/         # Entidades, almacenamiento y notificaciones
```

El servicio `TareasBd` centraliza la lectura y escritura de tareas en `localStorage`. La interfaz `Tarea` define los datos de cada tarea.

## Tecnologías

- Angular 20
- TypeScript
- Bootstrap 5
- SCSS
- RxJS
- Karma y Jasmine

## Recursos

- [Documentación de Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Bootstrap](https://getbootstrap.com/)
