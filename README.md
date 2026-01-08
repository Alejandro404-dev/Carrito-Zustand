# – Carrito de Compras en React + TypeScript

Este proyecto es una **refactorización completa** de mi primer carrito de compras desarrollado en JavaScript.  
El objetivo principal fue **rediseñar la arquitectura**, **migrar a TypeScript** y **manejar el estado global con Zustand**, aplicando buenas prácticas modernas de React.

---

## 🚀 Tecnologías utilizadas

- ⚛️ **React**
- 🟦 **TypeScript**
- 🐻 **Zustand** (estado global)
- 💾 **Zustand Persist** (persistencia en `localStorage`)
- 🎨 **Bootstrap** (estilos)
- ⚡ **Vite** (entorno de desarrollo)

---

## 📌 Funcionalidades principales

- Mostrar un catálogo de automóviles desde una base de datos simulada
- Agregar automóviles al carrito
- Incrementar y disminuir la cantidad de productos
- Límite máximo de productos por ítem
- Eliminar productos del carrito
- Vaciar el carrito completamente
- Calcular el costo total en tiempo real
- Persistencia del carrito usando `localStorage`

---

## 🧠 Arquitectura y conceptos clave

### 🔹 Tipado con TypeScript
Se definen tipos claros para separar responsabilidades:

```ts
export type Automovil = {
  id: number
  name: string
  image: string
  brand: string
  year: number
  topSpeed: string
  price: number
}

export type CartItem = Automovil & {
  quantity: number
}

Automovil: representa un producto del catálogo

CartItem: extiende Automovil añadiendo contexto de carrito (quantity)

🔹 Manejo de estado con Zustand

El estado del carrito se gestiona globalmente usando Zustand:

cart: lista de productos en el carrito

addToCart: agrega o incrementa un producto

eliminarDelCarrito: elimina un producto

vaciarCarrito: limpia el carrito

actualizarCantidad: ajusta la cantidad (+ / -)

costoTotal: calcula el total del carrito

Además, se utiliza persist para mantener el estado aunque se recargue la página.

Flujo de la aplicación

App.tsx

Importa la base de datos simulada

Mapea los automóviles

Renderiza un componente Automovil por cada item

Automovil.tsx

Recibe un automóvil como prop

Muestra la información del producto

Permite agregarlo al carrito usando Zustand

Header + Carrito

El carrito se renderiza desde el header

Consume el estado global

Permite modificar cantidades, eliminar productos y vaciar el carrito

🗂️ Persistencia

El carrito se guarda automáticamente en localStorage usando:

persist(
  (set, get) => ({ ... }),
  { name: "cart-storage" }
)
Esto permite que el estado del carrito se conserve incluso al recargar la página.

🛠️ Instalación y uso

# Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git

# Instalar dependencias
npm install

# Ejecutar el proyecto
npm run dev

📚 Aprendizajes clave

Migración de JavaScript a TypeScript

Tipado fuerte en componentes y estado global

Manejo de estado sin Redux

Separación clara entre catálogo y estado de carrito

Persistencia de estado en aplicaciones React

Autor

Alejandro Alfonso Teherán Guardó
Estudiante de Ingeniería de Sistemas y Computación
Enfocado en Frontend, React, TypeScript y Arquitectura de Software 🚀

