# Catedra 02

Este es un proyecto de ejemplo que utiliza Angular y ASP.NET Core (con C#) para construir una aplicación web moderna. A continuación, se proporcionan instrucciones detalladas sobre cómo configurar y ejecutar este proyecto en tu máquina local.

## Requisitos Previos

Asegúrate de tener instalados los siguientes requisitos antes de comenzar:

1. [Node.js y npm](https://nodejs.org/): Necesarios para instalar y gestionar las dependencias de Angular.
2. [Angular CLI](https://angular.io/cli): Herramienta de línea de comandos para Angular.
3. [.NET SDK](https://dotnet.microsoft.com/download): Necesario para desarrollar aplicaciones con ASP.NET Core.
4. [Visual Studio Code](https://code.visualstudio.com/) (opcional): Un editor de código ligero y potente.

## Configuración del Proyecto

Sigue estos pasos para configurar el proyecto en tu máquina:

1. **Clona el Repositorio:**
   ```bash
   git clone https://github.com/tuusuario/MiProyecto.git
   cd MiProyecto
Instala las Dependencias de Angular:

bash
Copy code
cd MiProyecto.ClientApp
npm install
Instala las Dependencias de ASP.NET Core:

bash
Copy code
cd ..
dotnet restore
Ejecutar la Aplicación
Después de configurar el proyecto, puedes ejecutar la aplicación con los siguientes pasos:

Ejecuta el Servidor de Desarrollo de Angular:

bash
Copy code
cd MiProyecto.ClientApp
ng serve
Ejecuta el Servidor de ASP.NET Core:

bash
Copy code
cd ..
dotnet run
