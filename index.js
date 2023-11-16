// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter froyo flavor separated by commas.",
    "vanilla, strawberry, coffee, taro, banana"
  );
  const stringArray = userInputString.split(",");


  console.log(Object.keys(froyoFlavor));



// Split the string of numbers into an array of strings.


console.table(["vanilla", "straberry", "Coffee"])



function flavorCount(array) {
  // let obj = froyoFlavor;
  const froyoFlavor = {
    vanilla: 0,
    strawberry: 0,
    Coffee: 0,
  }; 
//for(initilization; condition; afterthought)
for(i = 0; i < stringArray.length; i++){
  const str = stringArray[i]
  if (str === "vanilla") {
      console.log(flavorCount.vanilla += 1);
  } else (str === "strawberry") {
    console.log(flavorCount.strawberry += 1);
  } else (str === "Coffee") {
    console.log(flavorCount.Coffee += 1);
  }
} return froyoFlavor;
  }
console.table(flavorCount(stringArray))