// 1. for the given JSON iterate over all for loops (for,for in,for of,forEach)





let json = [

  {
    "name": "latha",
    "id": 102,
    "age": 29,
    "gendar": "female",
    "city": "chennai"
  },

  {

    "name": "priya",
    "id": 342,
    "age": 24,
    "gendar": "female",
    "city": "madurai"


  },

  {
    "name": "gopal",
    "id": 542,
    "age": 26,
    "gendar": "male",
    "city": "chennai"


  }


];

// stringify method:

console.log("This is STRINGIFY METHOD output");

let ob1 = JSON.stringify(json);
console.log(ob1);

// parse method:

console.log("This is PARSE METHOD output");

let ob2 = JSON.parse(ob1);
console.log(ob2);

// for loop:

console.log("This is FOR LOOP output");

for (var i = 0; i < json.length; i++) {

  let obj = json[i];
  console.log(obj.name);

}












// for in:



// Print property names of object

console.log("This is FOR IN output");

for (var attribute in json) {
  console.log(attribute);            // o/p ==> 0 1 2
}


// Print property values of object

for (var attribute in json) {
  console.log(json[attribute]);            // o/p ==> {name: 'latha', id: '102', age: '29', gendar: 'female', city: 'chennai'}
  // script.js:84 {name: 'priya', id: '342', age: '24', gendar: 'female', city: 'madurai'}
  // script.js:84 {name: 'gopal', id: '542', age: '26', gendar: 'male', city: 'chennai'}
}



// Print names and values of object properties


//  for (var attribute in json) {
//   console.log(`$[attribute]`.toUpperCase() + ` : $[json{attribute}]`);            
//  }


const shark = {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity
}

// Print names and values of object properties
for (attribute in shark) {
  console.log(`${attribute}`.toUpperCase() + `: ${shark[attribute]}`);
}





// for of :


// Print out each type of json:

console.log("This is FOR OF output");


for (let jsn of json) {
  console.log(jsn);

}


// Loop through both index and element

for (let [index, jsns] of json.entries()) {

  console.log(index, jsns);

}



// Assign string to a variable
let Strings = "hellowWorld";

// Iterate through each index in the string
for (let String of Strings) {
  console.log(String);
}










//  forEach:


console.log("This is FOR EACH output");


json.forEach((jsn) => {

  console.log('NAME:' + jsn.name);
  console.log('ID:' + jsn.id);
  console.log('AGE:' + jsn.age);
  console.log('GENDAR:' + jsn.gendar);
  console.log('CITY:' + jsn.city);


});