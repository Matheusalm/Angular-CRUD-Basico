export interface Product {
    // ? refere-se para que o atributo se opcional
    //caso não tenha, torna-se obrigatorio
    id?: number
    name: string
    price: number    
}