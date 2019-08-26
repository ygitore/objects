const findEmployeeStatus = (employee)=>{
    if(employee.name.charAt(0).toLowerCase() === 'c'){
        employee.status = 'vip';
    }else{
        console.log(`${employee.name} is total ${employee.status}`);
    }
}
var person = {
    name:prompt('Enter your name'),
    status: prompt('Enter your status')
}
findEmployeeStatus(person);
findEmployeeStatus({
    name:prompt('Enter your name'),
    status: prompt('Enter your status')
});

//This program 
const studentMark = (student)=>{
    if(student.mark>=90 && student.mark<=100){
       student.grade = 'A'; 
    }else if(student.mark>=80){
        student.grade='B';
    }else if(student.mark>=70){
        student.grade = 'C';
    }else if(student.mark>=60){
        student.grade = 'D';
    }else if(student.mark<60 && student.mark>=0){
        student.grade = 'F';
    }else{
        console.log("That\' is invalid input");
        student.mark = 'Invalid for mark';
        student.grade = 'Grade is not available this time';
    }
}
var student = {
    mark:prompt('Enter your mark: '),
    grade:null
}
studentMark(student);
console.log(student.mark);//prints the student mark
console.log(student.grade);//prints student grade
