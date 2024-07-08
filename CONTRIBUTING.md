# Guía de Contribución

¡Gracias por considerar contribuir a nuestro proyecto! Para mantener un flujo de trabajo organizado y coherente, seguimos el modelo de ramas de Gitflow. A continuación, encontrarás las pautas para contribuir de manera efectiva.

## Tabla de Contenidos

1. [Requisitos Previos](#requisitos-previos)
2. [Flujo de Trabajo de Git](#flujo-de-trabajo-de-git)
3. [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
4. [Estándares de Código](#estándares-de-código)
5. [Envío de Contribuciones](#envío-de-contribuciones)
6. [Reporte de Problemas](#reporte-de-problemas)

## Requisitos Previos

- Node.js (versión XX o superior)
- PostgreSQL
- Git
- Editor de código (recomendado: VSCode)

## Flujo de Trabajo de Git

Usamos Gitflow para gestionar nuestro flujo de trabajo de desarrollo. Aquí tienes una breve descripción de las ramas principales y su propósito:

- `main`: Contiene el código en producción. Solo se actualiza a través de merges desde `release` o `hotfix`.
- `develop`: Contiene el código más reciente con nuevas características y correcciones. Se actualiza a través de merges desde `feature`, `release` o `hotfix`.

### Ramas de Trabajo

- `feature/`: Ramas para nuevas características.
- `bugfix/`: Ramas para corregir bugs encontrados en la rama `develop`.
- `release/`: Ramas para preparar una nueva versión de producción.
- `hotfix/`: Ramas para correcciones urgentes en la rama `main`.

### Crear una Nueva Rama

Para empezar a trabajar en una nueva característica o corrección de un bug, sigue estos pasos:

1. Asegúrate de estar en la rama `develop` y actualizada:
    ```bash
    git checkout develop
    git pull origin develop
    ```

2. Crea una nueva rama a partir de `develop`:
    ```bash
    git checkout -b feature/nombre-de-la-caracteristica
    ```

### Trabajar en una Rama

- Realiza commits pequeños y coherentes. Cada commit debe hacer una cosa y hacerlo bien.
- Sigue los estándares de código y asegúrate de que tu código esté correctamente formateado.

### Finalizar una Rama

1. Una vez completada la característica o corrección, asegúrate de que la rama esté actualizada con `develop`:
    ```bash
    git checkout develop
    git pull origin develop
    git checkout feature/nombre-de-la-caracteristica
    git rebase develop
    ```

2. Crea un pull request hacia `develop` en GitHub. Asegúrate de que la descripción del PR sea clara y concisa.

## Configuración del Entorno de Desarrollo

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura la base de datos:
    - Asegúrate de tener PostgreSQL instalado y configurado.
    - Configura el archivo `.env` con tus credenciales de PostgreSQL.

4. Ejecuta las migraciones de Prisma:
    ```bash
    npx prisma migrate dev
    ```

5. Inicia la aplicación:
    ```bash
    npm run dev
    ```

## Estándares de Código

- Usa TypeScript para tipado estático.
- Sigue las reglas de ESLint y Prettier para el formato de código.
- Escribe pruebas unitarias para el código nuevo o modificado.
- Mantén los componentes y funciones pequeños y específicos a una tarea.

## Envío de Contribuciones

1. Abre un pull request hacia la rama `develop`.
2. Asegúrate de que el título del PR sea descriptivo y claro.
3. Describe los cambios realizados y por qué son necesarios.
4. Espera la revisión y realiza los cambios solicitados si es necesario.

## Reporte de Problemas

Si encuentras un bug o tienes una sugerencia, por favor abre un issue en GitHub. Asegúrate de incluir detalles suficientes para reproducir el problema y cualquier sugerencia para su solución.

---

¡Gracias por contribuir a nuestro proyecto! Tu ayuda es muy apreciada.