debugger;
function EmployeeDetails(){
    var name="Abhi"
    var age=24;
    var designation="Trainee";
    var salary=10000

    var Bonus=function(amt){
        salary=salary+10*amt;
    }

    return{
        name:name,
        age:age,
        designation:designation,
        Bonus:Bonus
    }
}

var emp=EmployeeDetails();
var userName=emp.name;
var userAge=emp.age;
var designation=emp.designation;
var bonus=emp.Bonus(10);
console.log(userName,userAge,designation,bonus);

