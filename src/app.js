/*
 * File: app.js
 * Author: Hajdara Patrik
 * Copyright: 2023, Hajdara Patrik
 * Group: SZOFT I/II/N
 * Date: 2023-03-31
 * Github: https://github.com/06776/
 * Licenc: GNU GPL
 */

var aTelekHosszInput = document.querySelector("#aTelekHossz");
var bTelekHosszInput = document.querySelector("#bTelekHossz");
var areaInput = document.querySelector("#area");
var calcButton = document.querySelector("#calcButton");

if (calcButton) {
  calcButton.addEventListener("click", () => {
    workInput();
  });
}

function workInput() {
  let res1 = checkInput(aTelekHosszInput.value);
  let res2 = checkInput(bTelekHosszInput.value);
  if (res1 && res2) {
    alert("A megadott adatok megfelelőek!");
  } else {
    alert("A megadott adatok sajnos nem megfelelőek!");
  }
  let aTelekHossz = Number(aTelekHosszInput.value);
  let bTelekHossz = Number(bTelekHosszInput.value);
  let area = calculateArea(aTelekHossz, bTelekHossz);
  areaInput.value = area + " m²";
}

function calculateArea(aTelekHossz, bTelekHossz) {
  return (
    (3 / 2) * Math.pow(aTelekHossz, 2) * Math.sqrt(3) +
    ((3 / 2) * Math.pow(bTelekHossz, 2) * Math.sqrt(3)) / 2
  );
}

function checkInput(input) {
  let res = input.match(/^[0-9]+$/);
  return res;
}
