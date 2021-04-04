const assert = require("assert");

/**function capitalizeFirstLetters(input) {
  const splitSentence = input.toLowerCase().split("");
  for (let i = 0; i < splitSentence.length; i++) {
    return (splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substr(1));
  }
  return splitSentence.join(" ");
}*/
function capitalizeFirstLetters(input) {
  let splitSentence = input.toLowerCase().split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }
  return splitSentence.join(" ");
}
assert.strictEqual(capitalizeFirstLetters("this is a test"), "This Is A Test");

assert.strictEqual(capitalizeFirstLetters("test"), "Test");

assert.strictEqual(capitalizeFirstLetters("z"), "Z");

assert.strictEqual(capitalizeFirstLetters(""), "");
