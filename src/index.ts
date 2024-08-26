/* const names = ["vickie", "lena", "helena", "robbie", "sarah"];

names.push("midgard");
//names.push(10)
//names[1] = 12;

const numbers = [1, 2, 3, 4, 56, 734, 23, 74, 12];

numbers.push(40);
//numbers.push("hello")
//number[2] = "alper"

const namesandnumbers = [...names, ...numbers];
namesandnumbers.push("hello");
namesandnumbers.push(123112);
namesandnumbers[0] = 200;

const user = {
  firstName: "Tracy",
  lastName: "Jenkins",
  birthDate: new Date(1964, 2, 1),
};

user.firstName = "alper";
console.log(user) */
/* 
let greet = () => {
  console.log("asd");
};

greet = () => {
  console.log("asdasd");
};

const sum = (num1: number, num2: number, param3?: number | string) => {
  console.log(num1 + num2);
  console.log(param3);
};

sum(1, 3);
 */
let leapYear: boolean;
const isLeapYear = (year: number) => {
  if (year % 4 == 0) {
    if (!(year % 400 == 0) && year % 100 == 0) {
      return (leapYear = false);
    } else if (year % 400 == 0 && year % 100 == 0) {
      return (leapYear = true);
    }
    return (leapYear = true);
  } else {
    return (leapYear = false);
  }
};


// Örnekler:
console.log("2024  --->  ", isLeapYear(2024)); //-- > true;
console.log("2021  --->  ", isLeapYear(2021)); //-- > false;
console.log("2020  --->  ", isLeapYear(2020)); //-- > true;
console.log("2019  --->  ", isLeapYear(2019)); //-- > false;
console.log("2000  --->  ", isLeapYear(2000)); //-- > true;
console.log("1900  --->  ", isLeapYear(1900)); //-- > false;
console.log("1700  --->  ", isLeapYear(1700)); //-- > false;
console.log("1600  --->  ", isLeapYear(1600)); //-- > true;
