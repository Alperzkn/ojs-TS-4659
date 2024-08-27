// **********************************************
// ******************* BÖLÜM 1 ******************
// **********************************************
// Yaşları tutmak üzere "ages" isminde boş bir array oluşturalım.
// Tür girmeyi unutmayalım.

// Kodu buraya yazalım...
const ages: number[] = [];

// **********************************************
// ******************* BÖLÜM 2 ******************
// **********************************************
// "gameBoard" isminde boş bir array oluşturalım. Bu array, stringlerden oluşan
// iki boyutlu bir array olmalı. Yani array'in içinde array'ler olacak ve bu
// array'lerin içinde string'ler olacak.

// Kodu buraya yazalım...
const gameBoard: string[][] = [];
// **********************************************
// ******************* BÖLÜM 3 ******************
// **********************************************
// "Product" isminde bir type oluşturalım. Bu type, bir "name" ve bir "price"
// isimli iki property'ye sahip olsun. Örnek:
// {name: "coffee mug", price: 11.50}

// Kodu buraya yazalım...
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
const pencil = {
  name: "pencil",
  price: 12,
};

const book = {
  name: " book",
  price: 65,
};

const cart: Product[] = [pencil, book];

const getTotal = (product: Product[]) => {
  return product.reduce((sum, x) => sum += x.price, 0);
};

console.log(getTotal(cart));
