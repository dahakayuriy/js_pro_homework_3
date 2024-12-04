"use strict";
const str1 = prompt("Enter the first line:");
const str2 = prompt("Enter the second line:");
const str3 = prompt("Enter the third line:");

alert(
  `Result: ${str1 || "the first line is not entered"}, ${
    str2 || "the second line is not entered"
  }, ${str3 || "the third line is not entered"}`
);
