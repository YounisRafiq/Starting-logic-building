// 1- Check a Number is Even or Odd

let num = 2;

if(num % 2 === 0){
    console.log(`${num} is Even`)
} else {
    console.log(`${num} is odd`)
};

// 2- Find the largest Number

let Num1 = 10;
let Num2 = 20;
let Num3 = 30;

switch(true) {
 case Num1 > Num2 && Num1 > Num3:
    console.log(`${Num1} is Largest`)
    break;

    case Num2 > Num1 && Num2 > Num2:
        console.log(`${Num2} is largest`);
        break;

        case Num3 > Num1 && Num3 > Num2:
            console.log(`${Num3} is largest`)
            break;

            default:
                console.log("Num is equal")

};

// If else condition

let Number1 = 10;
let Number2 = 20;
let Number3 = 30;

if(Number1 > Number2 && Number1 > Number3){
    console.log(`${Number1} is Largest`)
} else if(Number2 > Number1 && Number2 > Number3){
    console.log(`${Number2} is Largest`)
} else if(Number3 > Number1 && Number3 > Number2){
    console.log(`${Number3} is Largest`)
} else{
    console.log("Number is Equal")
}

// 3- Reverse String

let Name = "YounisRafiq"

let reversedStrig = Name.split('').reverse().join('')
console.log(reversedStrig);

// Using Loop

let Name2 = "YounisAhmad";
let reverseArr = [];
for(let i = Name2.length - 1; i >= 0; i--){
  reverseArr.push(...Name2[i]);
}
console.log(reverseArr.join(''));

// 4- Count Vovels

let str = "My Name is Younis Am A Developer";
let vovels = "aeiouAEIOU";
let countVovel = 0;

for (let i = 0; i < str.length; i++) {
    if(vovels.includes(str[i])){
        countVovel++
    }
    
}
console.log(`Total Vovels in ${str} is ${countVovel}`)


// 5- Sum of Array

let arr = [10 , 20 , 30 , 40 , 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
   sum += arr[i]
    
};

console.log(`Total Sum is ${sum}`);







