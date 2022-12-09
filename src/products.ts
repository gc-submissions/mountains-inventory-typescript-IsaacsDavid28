interface Product {
    name:string,
    price:number,
}

let products:Product[] = [{name:'steak', price:15}, {name:'coffee', price:15}, {name:'cookies', price:15}];

function calcAverageProductPrice(products:Product[]): number {
    let sum = 0
    for (let prod of products) {
        sum += prod.price
    }
    return sum / products.length
}

console.log(calcAverageProductPrice(products))

export {calcAverageProductPrice, Product};