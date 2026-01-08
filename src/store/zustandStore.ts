import { create } from "zustand";
import type { Automovil, CartItem } from "../types";
import { persist } from "zustand/middleware";


const MAX_QUANTITY = 10

type CartState = {
    cart: CartItem[]
    addToCart: (automovil: Automovil) => void
    eliminarDelCarrito: (automovilId: number) => void
    vaciarCarrito: () => void
    actualizarCantidad: (automovilId: number, ajusteCantidad: number) => void
    costoTotal: () => number

}

export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            //iniciamos carrito como un arreglo vacio
            cart: [],

            addToCart: (automovil) =>
                set((state) => {
                    //verificamos si ya existe el automóvil en el carrito
                    const automovilExiste = state.cart.find((item) => item.id === automovil.id)

                    //si existe, aumentamos la cantidad, si no, lo agregamos al carrito
                    return {
                        cart: automovilExiste ?

                            // el item existe en el carrito, iteramos con map,hacemos una copia del item e incrementamos en 1
                            state.cart.map((item) => item.id === automovil.id ?

                                {
                                    ...item,
                                    quantity: Math.min(item.quantity + 1, MAX_QUANTITY)
                                }
                                : item // si no es el item que buscamos, lo retornamos igual
                            )
                            :
                            // el item no existe en el carrito, entonces agregamos 1
                            [
                                ...state.cart,
                                {
                                    ...automovil,
                                    quantity: 1
                                }
                            ],
                    }
                }),

            eliminarDelCarrito: (automovilId) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== automovilId) //

                })),


            vaciarCarrito: () =>
                set({
                    cart: []
                }),


            actualizarCantidad: (automovilId, ajusteCantidad) =>
                set((state) => ({
                    cart: state.cart.map((item) => item.id === automovilId ? {
                        ...item,
                        quantity: Math.min(
                            Math.max(item.quantity + ajusteCantidad, 1),
                            MAX_QUANTITY
                        )
                    } : item),
                })),
            // función para calcular el costo total del carrito 
            costoTotal: () =>
                get().cart.reduce((
                    total,
                    { price, quantity }
                ) => total + price * quantity, 0

                ),


        }),
        {
            name: "cart-storage", // nombre del item en el almacenamiento
        }
    )
)