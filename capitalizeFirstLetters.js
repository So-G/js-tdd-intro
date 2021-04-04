const assert = require("assert");

assert.strictEqual(capitalizeFirst("this is a test"), "This Is A Test");

assert.strictEqual(capitalizeFirst("test"), "Test");

assert.strictEqual(capitalizeFirst("z"), "Z");

assert.assert.strictEqual(capitalizeFirst(""), "");
