console.log("hy my name is nauman khan");
age=24;
console.log(age+3);
name = "Muhammad nauman khan";

console.log(name);
x=null
console.log(x);
y=undefined
console.log(y);
isfollow=false
console.log(isfollow);
k=x
console.log(k);
let namek="homelander";
console.log(namek)
 namek="starlight";// let variable not redeclared but can be update
console.log(namek)
const namec="inteteller";
console.log(namec);
//namec="mad max fury";
//console.log(namec);// c
// onst variable can not be update or redeclared
let j=BigInt("34678")
let A=Symbol("this is symbol")
console.log(j);
console.log(A);
// now we discuss about object in js

    const student={
        name:"nauman khan",
        roll:"su92-bscsm-f24-67",
        semester: "4th",
        department: "computer science",
        cgpa: 3.5,
        age: 24
    }
    // we can change const object keys and values but we can not reassign the object
    console.log(student);
    console.log(student.name);
    console.log(student["roll"]);
     student ["age"]=student ["age"]+2;
    console.log(student.age);
    console.log(student["age"]);
    const products={
        name:"pen",
        price:100,
        colour:"black and silver"+11,
        rating:4.5+33,
        discount:5 

    }
    console.log(products);
    products.price=120;

    console.log(products["price"]);
    const profile={
        name:"nauman khan",
        age:24,
        account:"instagram",
        followers:20000,
        post:"5",
        following:24,
        bio:"web developer and designer"
    }
    console.log(profile);
    profile.followers=profile.followers+1000;
    console.log(profile.followers);
    // operation and condition statements
    let a=7;
     let b=8;
     console.log("a+b =",a+b);
     let c=9;
     let d=9;
     console.log("c*d =",c*d);
     console.log("c/d =",c/d);
     console.log("c%d =",c%d);
     console.log("c**d =",c**d);
     // unary operator
     f=3;
     console.log("f++ =",f++);
        console.log("f-- =",f--);
        // assignment operator

        let g=10;
        g+=5;
        console.log("g+=5=",g);
        g-=3;
        console.log("g-=3=",g);
        let z=4;
        console.log("z++=",z++);
        console.log("++z=",++z);
        // comparison operator
        let h=5;    
        let i=10;
        console.log("h==i",h==i);
        console.log("h!=i",h!=i);
        console.log("h>i",h>i);
        console.log("h<i",h<i);
        console.log("h>=i",h>=i);
        console.log("h<=i",h<=i);
        //=== check also data type
        console.log("h===i",h===i);
let o=9;
let p=4;
let cond1=o>p;
let cond2=o===p;
console.log("cond1 && cond2 =",cond1 && cond2)
let q=5;
let r=10;
let cond3=q>r;
console.log("cond1 || cond3 =",cond1 || cond3);
console.log("!cond1 =",!cond1);
// conditional statements
let marks=85;
if(marks>90){
    console.log("grade A");
}
else{
    console.log("grade B");
}
let mode="dark";
let colour;
if(mode==="dark"){
    colour="black";
    console.log("colour =",colour);
}
else {
    colour="whilte";
    console.log("colour =",colour);
}
// even odd
let num=10;
if(num%2===0){
    console.log(num,"is even");
}
else{
    console.log(num,"is odd");
}
// else if
let score=65;
if(score>=90){
    console.log("grade A");     
}
else if(score>=80){
    console.log("grade B");
}
else if(score>=70){
    console.log("grade C");
}
else{
    console.log("grade D");
}
// ternary operator
let age1=20;
let result=age1>=18?"eligible to vote":"not eligible to vote";
console.log(result);
let age2=24;
let result2=age2>=18 ? "you can go for the trip":"you cannot go for the trip";
console.log(result2);
// switch case
let day=3;      
switch(day){
    case 1:
        console.log("Monday");      
        break;
    case 2:
        console.log("Tuesday"); 
        break;
    case 3:
        console.log("Wednesday");
        break;
}
let marks4=99;
switch(marks4){
    case 90:
        console.log("GRADE A");
        break;
        case 80:
            console.log("GRADE B");
            break;
            case 99:
                console.log("grade A+");
break;
default:
console.log("grade not found");


}
alert("Welcome to JS"); // one-time popup

let username = prompt("What is your name?");
console.log(username);

let age7 = prompt("Now enter your age:");
console.log(age7);

let number = prompt("Please enter a number:");

if (number % 5 == 0) {
    console.log("The number is a multiple of 5");
} else {
    console.log("The number is not a multiple of 5");
}