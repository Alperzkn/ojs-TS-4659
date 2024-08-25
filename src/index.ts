const names = ["vickie", "lena", "helena", "robbie", "sarah"];

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
console.log(user)