const assert = require("assert");

function capitalizeFirst(input) {
  let splitSentence = input.toLowerCase().split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    splitSentence[i] =
      splitSentence[i].charAt(0).toUpperCase() + splitSentence[i].substring(1);
  }
  // Directly return the joined string
  return splitSentence.join(" ");
}

assert.strictEqual(capitalizeFirst("this is a test"), "This Is A Test");

assert.strictEqual(capitalizeFirst("test"), "Test");

assert.strictEqual(capitalizeFirst("z"), "Z");

assert.strictEqual(capitalizeFirst(""), "");
