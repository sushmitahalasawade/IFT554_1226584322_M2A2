
// function greetTheStudent(studentName){ // parameter // name function
//     // const message = 'Hello There';
//     // const greeting = message + ' ' + studentName;
//     return greeting =`Hello there ${studentName}`;
//     // return greeting

// }


// const greetTheStudent = function (studentName){ // parameter // anonymous function
//     return greeting =`Hello there ${studentName}`;

// }

// fat arrow function 
// const greetTheStudent =  (studentName)=>{ // parameter // anonymous function
//     return greeting =`Hello there ${studentName}`;

// }
const greetTheStudent = studentName => greeting =`Hello there ${studentName}`;
// const fullName = function(firstName, middleName,lastName){
//     return `${lastName}, ${middleName}, ${firstName}`;
// }

// const fullName = (firstName, middleName,lastName) =>{
//     return `${lastName}, ${middleName}. ${firstName}`;
// }

const fullName = (firstName, middleName,lastName) => `${lastName}, ${middleName}. ${firstName}`;

// // Do Not repeat Yourself (DRY)
// const student = 'Mary Jane';
// // const studentName2 = 'Mary Jane';

// const greet =greetTheStudent(student); // argument
// console.log(greet);

const titleName = fullName('Mary', 'R', 'Jane');
console.log(titleName);

// console.log(message + ' ' + studentName);
// console.log(message + ' ' + studentName2);
