// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons Convert null to a number, treating it as 0. That's why (3rd) null >= 0 returns "true" where as (1st) null > 0 returns "false".


console.log("2" == 2);
console.log("2" === 2);
// Here "===" is a strict check  which checks both value as well as type of the operands.
// So it returns false because one is string and another one is number.