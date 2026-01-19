# 📘 Pokedex

Proyecto **Pokedex** desarrollado como aplicación web para visualizar información de los **251 Pokémon correspondientes a las primeras dos generaciones**.

La aplicación consume datos desde la **PokeAPI** y permite explorar el catálogo completo, consultar información detallada de cada Pokémon y gestionar una lista de favoritos.



## 🚀 Funcionalidades

* 📖 Visualización de **251 Pokémon** (Generación I y II)
* 🔍 Vista detallada de cada Pokémon:

  * Estadísticas
  * Tipos
  * Información general
* ⭐ Sistema de **favoritos**:

  * Agregar Pokémon a una pestaña de favoritos
  * Persistencia de datos usando **localStorage**
* 🧭 Navegación fluida entre vistas
* 📱 Interfaz **responsive**



## 🧱 Arquitectura

Aplicación frontend desarrollada con arquitectura basada en componentes, utilizando React Hooks para la gestión de estado y lógica reutilizable.
Se aplica separación de responsabilidades entre componentes de presentación, hooks personalizados y servicios de acceso a datos (API).
El proyecto sigue un modelo de Client-Side Rendering (CSR), consumiendo datos desde una API REST externa (PokeAPI).



## 🛠️ Tecnologías utilizadas

* **React + Vite** – Framework y entorno de desarrollo
* **Tailwind CSS** – Estilizado y diseño responsive
* **Axios** – Consumo de la API
* **PokeAPI** – Fuente de datos de los Pokémon



## 📦 Instalación y ejecución

1. Clona el repositorio:

```bash
git clone https://github.com/DF2024/pokedex-prueba.git
```

2. Accede al directorio del proyecto:

```bash
cd prueba-pokedex
```

3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre el navegador en:

```
http://localhost:5173
```



## 📁 Estructura general del proyecto

```
src/
│── components/     # Componentes reutilizables
│── pages/          # Vistas principales (Home, Favoritos, Detalles)
│── hooks/          # Hooks personalizados
│── api/            # Configuración de Axios / API
│── layouts/        # Estilos globales (Barra de Navegación)
│── routes/         # Manejador de rutas del proyecto (react-router-dom)
│── assets/         # Imagenes y logos
│── App.jsx
│── main.jsx
```



## 🌐 API utilizada

* **PokeAPI**: [https://pokeapi.co/](https://pokeapi.co/)

Se utiliza para obtener información de Pokémon como:

* Nombre
* Tipos
* Estadísticas
* Imágenes



## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado con fines educativos para:

* Practicar consumo de APIs REST
* Manejar estado global y persistencia con localStorage
* Implementar rutas y vistas dinámicas
* Diseñar interfaces modernas con Tailwind CSS



## 👨‍💻 Autor

**Andres García**

Proyecto personal de aprendizaje y práctica con React.

