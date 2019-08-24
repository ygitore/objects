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