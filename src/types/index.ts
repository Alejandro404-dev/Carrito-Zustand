export type Automovil = {
    id: number
    name: string
    image: string
    brand: string
    year: number
    topSpeed: string
    price: number
}


export type CartItem = Automovil & {quantity: number}