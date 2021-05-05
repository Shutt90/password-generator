const rando = Math.floor(Math.random() * 9) + 1;
const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrNum = arrNumbers.toString();
console.log(arrNum);
const arrSym = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
];
const arrLowLet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const arrCapLet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

document.getElementById("pgen").addEventListener("click", function () {
  const getRandom = function (arr) {
    return Math.floor(Math.random() * arr.length);
  };

  const generatedPass = [];

  const symbolRandomize = function (arr) {
    for (i = 0; i <= rando; i++) {
      generated = arr[getRandom(arr)];
      generatedPass.push(generated);
    }
    return;
  };

  symbolRandomize(arrSym);
  symbolRandomize(arrCapLet);
  symbolRandomize(arrLowLet);
  symbolRandomize(arrNum);

  let finalPass = generatedPass.join("");
  console.log(finalPass);

  document.querySelector(".textfield").textContent = finalPass;
});
