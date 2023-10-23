class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

console.log(`Employees Working in "Wipro"`);
const empWipro = arrayEmps.filter((employe) => {
    if (employe.emp_company == "Wipro") {
        console.log("Name:",employe.emp_name,"Company:".emp_company);
    }
})
console.log("==================================================");
console.log(`Employees From "IT" or "HR" Department`);
const hrItemp = arrayEmps.filter((employe) => {
    if (employe.emp_dept == "IT" || employe.emp_dept == "HR") {
        console.log(employe.emp_name);
    }
})
console.log("==================================================");
console.log(`Employees Whose "ID" is greter than 50`);
const idgreter = arrayEmps.filter((employe) => {
    if (employe.emp_id > 50) {
        console.log(employe.emp_id, employe.emp_name);
    }
})
console.log("==================================================");
console.log(`Employees Whose Name starts with "A" or "V" or "M"`);
const charStart = arrayEmps.filter((employe) => {
    if (employe.emp_name.startsWith("A") || employe.emp_name.startsWith("V") || employe.emp_name.startsWith("M")) {
        console.log(employe.emp_name);
    }
})

console.log("==================================================");
const salaryAvg = arrayEmps.reduce((salary, employe) => {
    return salary + employe.emp_salary
}, 0)
const averageSalary = salaryAvg / arrayEmps.length;
console.log("Average Salary of all department:",averageSalary);

console.log("==================================================");
const itEmployees = arrayEmps.filter((employee) => {
   return employee.emp_dept === 'IT'
});
const totalSalaryIT = itEmployees.reduce((acc, employee) => {
    return acc + employee.emp_salary
}, 0);
const averageSalaryIT = totalSalaryIT / itEmployees.length;
console.log("Average Salary of IT department Employees:",averageSalaryIT);
