// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  console.log(cats); // Initial array: ["Milo", "Otis", "Garfield"]

  destructivelyAppendCat("Simba");
  console.log(cats); // Should be: ["Milo", "Otis", "Garfield", "Simba"]
  
  destructivelyPrependCat("Nala");
  console.log(cats); // Should be: ["Nala", "Milo", "Otis", "Garfield", "Simba"]
  
  destructivelyRemoveLastCat();
  console.log(cats); // Should be: ["Nala", "Milo", "Otis", "Garfield"]
  
  destructivelyRemoveFirstCat();
  console.log(cats); // Should be: ["Milo", "Otis", "Garfield"]
  
  function appendCat(name) {
    // Create a new array by concatenating the existing cats array with the new cat name
    const newCats = [...cats, name];
    return newCats;
  }

  const updatedCats = appendCat("Snowball");
console.log(updatedCats); // Should be: ["Milo", "Otis", "Garfield", "Snowball"]

function prependCat(name) {
    // Create a new array by concatenating the new cat name with the existing cats array
    const newCats = [name, ...cats];
    return newCats;
  }

function appendCat(name) {
  // Create a new array by concatenating the existing cats array with the new cat name
  const newCats = [...cats, name];
  return newCats;
}

const appendedCats = appendCat("Snowball");
console.log(appendedCats); // Should be: ["Milo", "Otis", "Garfield", "Snowball"]

function prependCat(name) {
  // Create a new array by concatenating the new cat name with the existing cats array
  const newCats = [name, ...cats];
  return newCats;
}
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  function removeLastCat() {
    // Make a copy of the cats array
    const newCats = [...cats];
  
    // Remove the last cat in the array
    newCats.pop();
  
    // Return the new array
    return newCats;
  }

  function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
  }
