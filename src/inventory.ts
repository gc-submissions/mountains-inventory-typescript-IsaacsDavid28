//import './products';
import { Product } from './products';

interface InventoryItem {
    product:Product,
    quantity:number,
}

let inventory:InventoryItem[] = [{ product: {name:'motor', price:10.00 }, quantity:10}, { product:{name:'sensor', price:12.50}, quantity:4}, {product:{name:'LED', price:1.00}, quantity:20}]

function calcInventoryValue(inventory:InventoryItem[]): number {
    let sum = 0
    for(let inv of inventory) {
        let total = inv.quantity * inv.product.price
        sum += total
    }
    return sum
}

console.log(calcInventoryValue(inventory))

export {calcInventoryValue, InventoryItem}