var student = {
    name:'John Smith',
    birthYear: 2002,
    course: 'IFT 554',
    grade: 90,
    active: true,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        }
    }
}
var student2 = {
    name:'Andy Moore',
    birthYear: 2000,
    course: 'IFT 554',
    grade: 100,
    active:false,
    age: function(){
        if(this.active){
            return 2022 - this.birthYear;
        }else{
            return 0;
        }
    }
}
// console.log(student['name']);
// console.log(student.name);
console.log(student2.age());
console.log(student.age());