// Access input, button, and output paragraph elements
const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  // Save input into variable and check for edge cases
  const inputNum = parseInt(number.value);

  if (isNaN(inputNum)) {
    output.textContent = "Please enter a valid number";
  } else if (inputNum <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputNum > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = convert(inputNum);
  }
});

const convert = (num) => {
  // Initialize roman numeral map
  const romanNumeralMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let currNum = num;
  let result = "";

  // Iterate through map and add characters while subtracting from current number
  for (let char in romanNumeralMap) {
    if (currNum >= romanNumeralMap[i]) {
      currNum -= romanNumeralMap[i];
      result += char;
    }
  }
  return result;
}