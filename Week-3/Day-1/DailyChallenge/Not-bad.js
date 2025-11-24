let sentence = "The movie is not that bad, I like it";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Replace "not ... bad" with "good"
    sentence = sentence.replace(sentence.substring(wordNot, wordBad + 3), "good");
}

console.log(sentence);
