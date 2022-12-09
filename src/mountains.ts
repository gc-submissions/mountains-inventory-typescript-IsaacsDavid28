// boolean number bigint string symbol null undefined

let fullName:string = "David Isaacs";

// objects are a way of grouping data together
interface Mountain {
    name:string,
    height:number,
    // this is optional
    hasBeenClimbed?:boolean,
}

interface Product {
    price:number,
    name:string,
    inStock:boolean
}

//implement

let newProduct:Product = {
    price: 10,
    name: 'graham crackers',
    inStock: true
}

let newMountain:Mountain = {
    name: "Kilaminjaro",
    height: 10000,
}

let mountains:Mountain[] = [{name:'Kilimanjaro', height:19341}, {name:'Everest', height:29029}, {name:'Denali', height:20310}];

//function signature
function findNameOfTallestMountain(mountains: Mountain[]): string {
  if (mountains.length === 0) {
    return "";
  }

  let tallestMountain = mountains[0];
  for (let mountain of mountains) {
    if (mountain.height > tallestMountain.height) {
      tallestMountain = mountain;
    }
  }

  return tallestMountain.name;
}

console.log(findNameOfTallestMountain(mountains));

let thisVariableCanBeAnything:any;

let stringOrNumber:string|number;

stringOrNumber = "Jonathan";
stringOrNumber = 0;

export {findNameOfTallestMountain, Mountain};

