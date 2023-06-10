export interface CartItem {
    id?:string,
    book_id?: string | null,
    image?:string | null,
    name?:string | null,
    category?:string | null,
    price?:number | null,
    amount:number
}
