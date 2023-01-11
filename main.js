let word = prompt("Veuillez saisir un mot :");
let reverseWord = word.split('').reverse().join('');

if (word == reverseWord) {
    alert("Ce mot est un palindrome");
} else {
    alert("Ce mot n'est pas un palindrome");
}