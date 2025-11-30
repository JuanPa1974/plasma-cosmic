# Proyecto FORMA – Goya Training

Maqueta de aplicación web para el proyecto de formación corporativa "Proyecto FORMA" de Goya Europa.

## Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS v4
- **Iconos**: Lucide React
- **Lenguaje**: TypeScript

## Estructura del Proyecto

- `/src/app`: Rutas y páginas de la aplicación.
- `/src/components`: Componentes reutilizables (Header, Footer).
- `/src/app/globals.css`: Configuración de estilos globales y variables corporativas.

## Instrucciones de Ejecución

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`.

3. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## Personalización

- **Colores**: Los colores corporativos están definidos en `src/app/globals.css`.
- **Imágenes**: Se han utilizado placeholders. Para reemplazar imágenes, subir los archivos a `public/` y actualizar las rutas en los componentes correspondientes.
