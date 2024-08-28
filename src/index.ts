/* const linkEl = document.querySelector("a");

const form = document.querySelector("#form") as HTMLFormElement;
const nameEl = document.querySelector("#name") as HTMLInputElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log(nameEl.value);
});
 */
/* type Product = {
  name: string;
  price: number;
};
const pencil: Product = {
  name: "pencil",
  price: 12,
};

const book: Product = {
  name: " book",
  price: 65,
};

const cart = [pencil, book];

const getTotal = (product: Product[]) => {
  return product.reduce((sum, x) => (sum += x.price), 0);
};

console.log(getTotal(cart));
 */
/* 
interface Human {
  name: string;
  age: number;
  eat(food: string): void;
  walk(distanceKm: number): number;
}

const person1: Human = {
  name: "Alper",
  age: 35,
  eat: (food: string) => {
    console.log("Kişi " + food + " yedi");
  },
  walk: (km: number) => {
    console.log("Kişi " + km + " km yol yürüdü");
    return km;
  },
};

const person2: Human = {
  name: "Ali",
  age: 23,
  eat: (food: string) => {
    console.log("Ali  " + food + " yedi");
  },
  walk: (km: number) => {
    console.log("Ali " + km + " km yol yürüdü");
    return km;
  },
};

const greetHuman = (human: Human) => {
  console.log("merhaba " + human.name);
  console.log();
};

interface Pet<T> {
  name: string;
  age: T;
}

interface Dog extends Pet<number> {
  breed: string;
}

interface Fish extends Pet<number> {
  finColor: string;
}

const myFish: Fish = {
  name: "nemo",
  age: 10,
  finColor: "bronze",
};
 */
const greet = (name: string | string[]) => {
  if (typeof name === "string") {
    console.log("Değişken string girildi!");
  } else {
    name.map((name) => {
      console.log("Merhaba " + name);
    });
  }
};

greet(["alper", "özkan"]);
