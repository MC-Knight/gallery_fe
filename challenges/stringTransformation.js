function transformString(input) {
  const wordLength = input.length;
  let result = input;

  // Rule 1: Reverse the entire string if its length is divisible by 3
  if (wordLength % 3 === 0) {
    result = result.split("").reverse().join("");
  }

  // Rule 2: Replace each character with its ASCII code if the length is divisible by 5
  if (wordLength % 5 === 0) {
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return result;
}
