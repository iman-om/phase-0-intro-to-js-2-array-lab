// Write your solution here!
// index.js

// Initialize the 'cats' array with an initial value
const cats = ["Milo", "Otis", "Garfield"];

// Function to destructively append a cat to the end of the 'cats' array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the 'cats' array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to destructively remove the last cat from the 'cats' array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove the first cat from the 'cats' array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the 'cats' array without modifying the original 'cats' array
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the 'cats' array without modifying the original 'cats' array
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the 'cats' array and return a new array without modifying the original 'cats' array
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the 'cats' array and return a new array without modifying the original 'cats' array
function removeFirstCat() {
  return cats.slice(1);
}

