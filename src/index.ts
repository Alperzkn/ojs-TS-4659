type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* BÖLÜM 4 ******************
// **********************************************
// "getTotal" isminde bir fonksiyon oluşturalım. Bu fonksiyon, bir önceki adımda
// yazdığımız "Product" türünden oluşan bir array alsın ve bu array'in içindeki
// ürünlerin fiyatlarının toplamını dönsün.

// Kodu buraya yazalım...

const basket: Product[] = [
  { name: "pencil", price: 11 },
  { name: "book", price: 5 },
];

/* let getTotal = basket.forEach((a) => (sum += a.price));
console.log(basket);
console.log(sum); */

const asd = (product: Product) => {
  let sum: number = 0;
  product.forEach((a) => (sum += a.price));
  return sum;
};

console.log(asd(basket));
