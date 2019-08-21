// FIX THIS FUNCTION (there are multiple errors)
const isPalindrome = function(str) {
  const noSpaces = str.split(" ").join("");
  const midIndex = Math.floor(noSpaces.length/2);
  const lastIndex = noSpaces.length - 1;

  for (let i = 0; i < midIndex; i++) {
    if (str[i] !== str[lastIndex - i]) return false;
  }
}

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome(\"${word}\"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\t✅ returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\t🛑 returned ${actual} (expected ${expected})\n`);
  }
}

// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
// assertEqual(isPalindrome('Kayak'), true);
// assertEqual(isPalindrome('a santa at NASA'), true);
