console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Colin',
  lastName: 'Oraskovich',
  hasSiblings: true,
  shoeCount: 4,
  favThreeFoods: ['lasagna', 'burrito', 'tater tots']
};
console.log('A little about me:', me);


/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = `${me.firstName} ${me.lastName}`
console.log(`My full name is ${fullName}.`)


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
// Use the first index to get the `favThreeFoods`
console.log(`My first favorite food is ${me.favThreeFoods[0]}.`)
// Get the last element by using the array length minus one
console.log(`The last favorite food is ${me.favThreeFoods[me.favThreeFoods.length - 1]}`)


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
// Log out the existing shoe count
console.log(`The initial shoe count is`, me.shoeCount)
// Add an additional pair of shoes
me.shoeCount++
// Now check to see the new shoes were added to the count
console.log(`The updated shoe count is`, me.shoeCount)


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
// Add in the new property to the object
me.favoriteColor = 'red'
// Check the console to ensure it was added
// Using the property check recommended here: https://stackoverflow.com/a/455366
console.log(`The 'me' object should now have 'favorite color' listed`, me.hasOwnProperty('favoriteColor'))
console.log(`That favorite color is ${me.favoriteColor}`)
console.log('The full object for inspection', me)