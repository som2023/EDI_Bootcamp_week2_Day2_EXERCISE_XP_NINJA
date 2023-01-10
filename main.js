/*@@@@@@@@@@@@@--EXERCISE_1--@@@@@@@@@@@@@@@@*

 * Given the years two people were born, find the date when the younger one is exactly half the age of the older.
Notes: The dates are given in the format YYYY
 */


const birthYear = Number(prompt("entrez la date de naissance de la premiere personne"));
const birth = Number(prompt("entrez la date de naissance de la deuxième personne"));

if (birthYear < birth) {
  // Personne 2 est plus jeune
  const ageDif = birth - birthYear;
  const halfAge = ageDif * 2;
  const halfAgeYear = birthYear + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else if (birth < birthYear) {
  // Personne 1 est plus jeune
  const ageDif = birthYear - birth;
  const halfAge = ageDif * 2;
  const halfAgeYear = birth + halfAge;
  console.log(`Le plus jeune a exactement la moitié de l'âge du plus âgée en ${halfAgeYear}`);
} else {
  // Les personnes ont le même âge
  console.log(`Les personnes ont le même âge`);
}

/*@@@@@@@@@@@@@@@@--Exercise_2@@@@@@@@@@@@@@@@@@@@@@@ */

const zipCode = prompt("Enter a zipcode:")
    // Zip codes conditions
if (zipCode.length !== 5 || zipCode.indexOf(" ") !== -1 ||isNaN(zipCode)) {
    console.log("error");

}else{
    console.log("success");
}

//zip codes using Regex

if (/^\d{5}$/.test(zipCode)) {
    console.log("error");
}else{
    console.log("error")
}

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result

// Prompt the user for a word
let word = prompt("Enter a word:");

// Delete all the vowels from the word
let noVowels = word.replace(/[aeiou]/gi, '');

// Console.log the result
console.log(noVowels);

// Bonus: Replace the vowels with another character
let replaceVowel = word.replace(/[aeiou]/gi, function(match) {
  switch (match) {
    case 'a':
      return 1;
    case 'e':
      return 2;
    case 'i':
      return 3;
    case 'o':
      return 4;
    case 'u':
      return 5;
  }
});

//Console.log the result
console.log(replaceVowel); 