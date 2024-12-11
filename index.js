// Function to generate a random string with spaces
function generateRandomString(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < length; i++) {
    // Randomly decide whether to add a space or a character
    if (Math.random() < 0.2) {
      // 20% chance for a space
      result += " ";
    } else {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  }

  return result;
}

module.exports = generateRandomString;
