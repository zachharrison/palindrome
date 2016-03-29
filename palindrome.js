function isPalindrome(str) {
  var noSpaces = str.split(" ").join("");
  var mid = Math.floor(noSpaces.length/2);
  var last = noSpaces.length - 1;

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[last - i]) return false;
  }
}

// Test driver code. These should all log true.
console.log(isPalindrome('P') === true);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('a santa at nasa') === true);
console.log(isPalindrome('A Toyota') === true);
console.log(isPalindrome('No lemon no melon') === true);
console.log(isPalindrome('just some random words') === false);

