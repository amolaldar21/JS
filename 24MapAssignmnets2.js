class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }


}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS")
const emp_sonali=new Employee(33,"Sonali","FInance",45000,"Infy")
const emp_viny=new Employee(33,"viny","IT",40000,"Wipro")
const emp_monika=new Employee(33,"Vinayak","IT",75000,"TCS")
const emp_mahi=new Employee(33,"Mahesh","HR",85000,"Infy")
const allEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_viny,emp_monika,emp_mahi]
console.log("=================Feching emp name===================");
const  empName=allEmployee.map((employee)=>{
    return employee.emp_name
})
console.log(empName);
console.log("====================Feching emp department====================");
const  empDept=allEmployee.map((employee)=>{
    return employee.emp_dept
})
console.log(empDept);
console.log("===================feching emp id======================");
const  empid=allEmployee.map((employee)=>{
    return employee.emp_id
})
console.log(empid);