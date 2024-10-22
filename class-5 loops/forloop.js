// Q:print the numbers btwn 1to 5.
// for (let i = 1; i <=5 ; i++) {
//     console.log(i);

// }
// Q:print the numbers btwn 5 to 1.

// for (let i = 5; i >=1 ; i--) {
//     console.log(i);

// }
// Q -: generate 5 numbers and add them 
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   let num = Math.floor(Math.random() * 10);
//   console.log(num);
//   sum = sum + num;
//   console.log(sum);
// }

// nexted loop
//  def- a loop inside another loop 
//  for (let i = 0; i <= 5; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(j);      
//     }
//    console.log(i);
//  }

for (let i = 1; i <=5; i++) {
let pattern = "";
for (let j = 1; j <= i; j++) {
    pattern+= "*"

    
}
    console.log(pattern );
    
}