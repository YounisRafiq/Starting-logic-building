// 1- Check a Number is Even or Odd

let num = 2;

if (num % 2 === 0) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is odd`);
}

// 2- Find the largest Number

let Num1 = 10;
let Num2 = 20;
let Num3 = 30;

switch (true) {
  case Num1 > Num2 && Num1 > Num3:
    console.log(`${Num1} is Largest`);
    break;

  case Num2 > Num1 && Num2 > Num2:
    console.log(`${Num2} is largest`);
    break;

  case Num3 > Num1 && Num3 > Num2:
    console.log(`${Num3} is largest`);
    break;

  default:
    console.log("Num is equal");
}

// If else condition

let Number1 = 10;
let Number2 = 20;
let Number3 = 30;

if (Number1 > Number2 && Number1 > Number3) {
  console.log(`${Number1} is Largest`);
} else if (Number2 > Number1 && Number2 > Number3) {
  console.log(`${Number2} is Largest`);
} else if (Number3 > Number1 && Number3 > Number2) {
  console.log(`${Number3} is Largest`);
} else {
  console.log("Number is Equal");
}

// 3- Reverse String

let Name = "YounisRafiq";

let reversedStrig = Name.split("").reverse().join("");
console.log(reversedStrig);

// Using Loop

let Name2 = "YounisAhmad";
let reverseArr = [];
for (let i = Name2.length - 1; i >= 0; i--) {
  reverseArr.push(...Name2[i]);
}
console.log(reverseArr.join(""));

// 4- Count Vovels

let str = "My Name is Younis Am A Developer";
let vovels = "aeiouAEIOU";
let countVovel = 0;

for (let i = 0; i < str.length; i++) {
  if (vovels.includes(str[i])) {
    countVovel++;
  }
}
console.log(`Total Vovels in ${str} is ${countVovel}`);

// 5- Sum of Array

let arr = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(`Total Sum is ${sum}`);

// 6- Pallindrome Checker

let str2 = "madam";

let reversedStr = str2.split("").reverse().join("");

if (str2 === reversedStr) {
  console.log(`${str2} is Pallindrome`);
} else {
  console.log(`${str2} is NOT Pallindrome`);
}

// 7- Find Second largest Number

let arr2 = [10, 20, 30, 40];

let largest = arr2[0];
let secondLargest = -Infinity;

for (let i = 1; i < arr2.length; i++) {
  let allNumbers = arr2[i];
  if (allNumbers > largest) {
    secondLargest = largest;

    largest = allNumbers;
  } else if (allNumbers > secondLargest && allNumbers < largest) {
    secondLargest = allNumbers;
  }
}

console.log(`Largest is ${largest}`);
console.log(`Second Largest is ${secondLargest}`);

// 8- Count Words in a Sentence

let sentence = "I Love JavaScript";
let words = sentence.split(' ').length
console.log(`Total Number of Words in ${sentence} are ${words}`);

// 9- Find Maximum in Array without built-in functions

let arr3 = [5, 8, 2, 9, 1];
let max = arr3[0];

for (let i = 1; i < arr3.length; i++) {
    let num = arr3[i];

    if(num > max){
        max = num
    }   
};

console.log(`The Max number is ${max}`);

// 10- Factorial of a number

function factorial(n) {
   let result = 1;

   for (let i = n; i >= 1; i--) {
    result = result * i
    
   }
   return result
};

console.log(factorial(5))