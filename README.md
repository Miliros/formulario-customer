# Prueba Técnica de Desarrollo Front End - Customer Scoops

¡Gracias por la oportunidad de participar en este test! A continuación, describo mi enfoque y los pasos necesarios para ejecutar este proyecto.

## Descripción

Este proyecto consiste en la maquetación de un formulario proporcionado en Figma, utilizando las tecnologías especificadas, y en la configuración del envío de un correo electrónico con el diseño implementado. La aplicación está dividida en dos partes: una aplicación frontend en React y una API backend en Node.js.

## Enlaces

- **Despliegue de la aplicación**: (https://formulario-customer.vercel.app/)
- **Repositorio en GitHub**: (https://github.com/Miliros/formulario-customer.git)

## Tecnologías Utilizadas

- **Frontend**:

  - **Lenguaje**: TypeScript
  - **Framework**: React
  - **Herramienta de desarrollo**: Vite
  - **Componentización**: Estructura modular y reutilizable

- **Backend**:
  - **Servidor**: Node.js y Express
  - **Envío de Correo**: Plataforma Resend

## Instrucciones de Configuración y Ejecución

### 1. Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/formulario-customer.git
cd formulario-customer

### 2. Configuración del Entorno
Para ejecutar correctamente el proyecto, es necesario configurar las variables de entorno.

Frontend
En el archivo .env en la carpeta raíz del frontend:
VITE_API="http://localhost:4000"

Backend
En el archivo .env en la carpeta back:
PORT=4000
RESEND_API_KEY="re_PCNnUH9n_4yFzYzTUPiNqUKzUtuv8fCDp"
3. INSTALACION DE DEPENDENCIAS
# Frontend
cd formulario-customer
npm install

# Backend
cd back
npm install

4. EJECUCION DEL PROYECCTO

# Ejecuta el backend
cd back
npm run dev

# En otra terminal, ejecuta el frontend
cd formulario-customer
npm run dev

La aplicación debería estar disponible en http://localhost:3000, mientras que el backend escucha en http://localhost:4000
```

## Tener en cuenta :
 Envie invitacion a anthony@customerscoops.com a mi cuenta de Resend https://resend.com/ para que puedas visualizar que el email se envia correctamente ya que no me permite utilizar tu dominio porque ya esta en uso.
