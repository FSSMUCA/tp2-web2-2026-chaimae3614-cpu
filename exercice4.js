let compteur = 0;

let a1 = 0, b1 = "";
let r1 = a1 == b1;
let s1 = a1 === b1;
console.log('0 == "" -> ' + r1 + ' | 0 === "" -> ' + s1);
if (r1 && !s1) compteur++;

let a2 = 0, b2 = "0";
let r2 = a2 == b2;
let s2 = a2 === b2;
console.log('0 == "0" -> ' + r2 + ' | 0 === "0" -> ' + s2);
if (r2 && !s2) compteur++;

let a3 = 0, b3 = false;
let r3 = a3 == b3;
let s3 = a3 === b3;
console.log('0 == false -> ' + r3 + ' | 0 === false -> ' + s3);
if (r3 && !s3) compteur++;

let a4 = "", b4 = false;
let r4 = a4 == b4;
let s4 = a4 === b4;
console.log('"" == false -> ' + r4 + ' | "" === false -> ' + s4);
if (r4 && !s4) compteur++;

let a5 = null, b5 = undefined;
let r5 = a5 == b5;
let s5 = a5 === b5;
console.log('null == undefined -> ' + r5 + ' | null === undefined -> ' + s5);
if (r5 && !s5) compteur++;

let a6 = null, b6 = false;
let r6 = a6 == b6;
let s6 = a6 === b6;
console.log('null == false -> ' + r6 + ' | null === false -> ' + s6);
if (r6 && !s6) compteur++;

let a7 = NaN, b7 = NaN;
let r7 = a7 == b7;
let s7 = a7 === b7;
console.log('NaN == NaN -> ' + r7 + ' | NaN === NaN -> ' + s7);
if (r7 && !s7) compteur++;

let a8 = 1, b8 = "1";
let r8 = a8 == b8;
let s8 = a8 === b8;
console.log('1 == "1" -> ' + r8 + ' | 1 === "1" -> ' + s8);
if (r8 && !s8) compteur++;

let a9 = " \t\n ", b9 = 0;
let r9 = a9 == b9;
let s9 = a9 === b9;
console.log('" \\t\\n " == 0 -> ' + r9 + ' | " \\t\\n " === 0 -> ' + s9);
if (r9 && !s9) compteur++;

console.log(compteur + " paire(s) où == et === donnent des résultats différents");
