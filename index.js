// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter froyo flavor separated by commas.",
    "vanilla, strawberry, coffee, taro, banana"
  );
  const froyoFlavor = {
    vanilla: 3,
    strawberry: 1,
    Coffee: 2,
  }; 
  console.log(Object.keys(froyoFlavor));



// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

console.table(["vanilla", "straberry", "Coffee"])

//let froyoFlavor = userInputString
//console.log(Object.values(froyoFlavor));


const froyoFlavor1 = {}
  froyoFlavor1.name= 'vanilla';
  froyoFlavor1.quantity= 3;
 
const froyoFlavor2 = {}
  froyoFlavor2.name= 'strawberry';
  froyoFlavor2.quantity= 1;

const froyoFlavor3 = {}
  froyoFlavor3.name= 'Coffee';
  froyoFlavor3.quantity= 2;

  // looping through an object
for(const key in froyoFlavor1) {
  console.log(key);
  console.log(froyoFlavor1[key]);
}

for(const key in froyoFlavor2) {
  console.log(key);
  console.log(froyoFlavor2[key]);
}

for(const key in froyoFlavor3) {
  console.log(key);
  console.log(froyoFlavor3[key]);
}

function checkName(obj) {
  // let obj = froyoFlavor;
  if(obj.name === "vanilla") {
      obj.quantity = 3
  } else if(obj.name === "strawberry") {
      obj.quantity= 1}
      else if(obj.name === "Coffee") {
        obj.quantity = 2
  } else {
      obj.quantity = null;
  }

  return obj;
  }
  console.log(checkName(froyoFlavor1));
  console.log(checkName(froyoFlavor2));
  console.log(checkName(froyoFlavor3));