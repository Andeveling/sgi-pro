# Sistema de Gestión de Inventario para Tienda de Tecnología

## Descripción

Este proyecto es un sistema de gestión de inventario para una tienda de tecnología, diseñado para facilitar la administración de productos, ventas, clientes y empleados. La aplicación permite registrar y gestionar productos, realizar ventas, mantener un registro de clientes y empleados, y gestionar el inventario de manera eficiente.

## Tecnologías Utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/): Un framework de React para aplicaciones web modernas.
  - [Shadcn](https://shadcn.dev/): Componentes UI personalizados para aplicaciones Next.js.
  - [TypeScript](https://www.typescriptlang.org/): Un superset de JavaScript que añade tipado estático.
  - [Tailwind CSS](https://tailwindcss.com/): Un framework CSS utilitario para un diseño rápido y responsivo.
  - [react-hook-form](https://react-hook-form.com/): Biblioteca para el manejo de formularios en React.
  - [TanStack Table](https://tanstack.com/table): Biblioteca para la creación y manejo de tablas de datos en React.

- **Backend**:
  - [PostgreSQL](https://www.postgresql.org/): Un potente sistema de gestión de bases de datos relacional.
  - [Prisma ORM](https://www.prisma.io/): Un ORM moderno para Node.js y TypeScript.
  - [NextAuth](https://next-auth.js.org/): Solución de autenticación para Next.js.
  - Server Actions: Funcionalidades del servidor para manejar acciones y eventos.

- **Herramientas de Desarrollo**:
  - [Prettier](https://prettier.io/): Un formateador de código.
  - [ESLint](https://eslint.org/): Una herramienta de análisis estático de código para identificar y reportar patrones problemáticos en JavaScript.
  - [Husky](https://typicode.github.io/husky/#/): Herramienta para ejecutar scripts de Git hooks.
  - [Jest](https://jestjs.io/): Un framework de testing para JavaScript, diseñado para asegurar la corrección del código.
## Características

- **Gestión de Productos**: Registro, actualización y eliminación de productos con detalles como nombre, descripción, marca, modelo, precio, cantidad en stock y categoría.
- **Gestión de Ventas**: Creación y manejo de pedidos, detalles de pedidos, métodos de pago y generación de recibos.
- **Gestión de Clientes y Empleados**: Registro y manejo de información de contacto de clientes y empleados, incluyendo roles y permisos.
- **Autenticación y Autorización**: Implementación de autenticación de usuarios y autorización basada en roles con NextAuth.
- **Interfaz de Usuario Moderna**: Uso de Shadcn y Tailwind CSS para una interfaz de usuario atractiva y responsiva.
- **Formularios y Tablas de Datos**: Implementación de formularios manejados con useForm y tablas de datos eficientes con TanStack Table.

## Instalación y Configuración

1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. Instalar dependencias:
    ```bash
    pnpm install
    ```

3. Configurar la base de datos:
    - Asegúrate de tener PostgreSQL instalado y configurado.
    - Configura el archivo `.env` con tus credenciales de PostgreSQL.

4. Ejecutar migraciones de Prisma:
    ```bash
    pnpm dlx prisma migrate dev
    ```

5. Iniciar la aplicación:
    ```bash
    pnpm dev
    ```

## Contribución

¡Contribuciones son bienvenidas! Por favor, abre un issue o un pull request para cualquier mejora o corrección.

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

Espero que esta descripción te sea útil. ¡Buena suerte con tu proyecto!