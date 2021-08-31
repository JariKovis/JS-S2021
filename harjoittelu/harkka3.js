// Define an object to hold data for a person
var person0 = {
    firstName:"Jari",
    lastName:"Kovis",
    address:"Kantokaskenpolku 3",
    telephone: "+358 50 3878613",
    age:60,
    eyeColor:"green"
};

var person1 = {
    firstName:"Janne",
    lastName:"Kovis",
    address:"Kantokaskenpolku 3",
    telephone: "+358 50 3556633",
    age:26,
    eyeColor:"green"
};

var person2 = {
    firstName:"Jenni",
    lastName:"Kovis",
    address:"Kantokaskenpolku 3",
    telephone: "+358 50 3556507",
    age:23,
    eyeColor:"green"
};

var person3 = {
    firstName:"Jonna",
    lastName:"Kovis",
    address:"Kantokaskenpolku 3",
    telephone: "+358 50 3556498",
    age:18,
    eyeColor:"green"
};

var person4 = {
    firstName:"Noora",
    lastName:"Kovis",
    address:"Kantokaskenpolku 3",
    telephone: "+358 50 3556499",
    age:18,
    eyeColor:"green"
};

var nimilista =[person0, person1, person2, person3, person4];

var printInfo = function () {
    for (let i = 0; i < nimilista.length; i++) {
        console.log(nimilista[i].firstName + " " +  nimilista[i].address + " age " + nimilista[i].age);
        document.write(nimilista[i].firstName + " " +  nimilista[i].address + " age " + nimilista[i].age);
        document.write("<br>");
      }
   
    
};
  
printInfo();

//console.log(person.firstName + " " +  person.address + " age " + person.telephone);
