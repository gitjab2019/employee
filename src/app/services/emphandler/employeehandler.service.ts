import { Injectable, OnInit } from '@angular/core';
import { Employee } from '../../empleado.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeehandlerService implements OnInit {
  empleados: Employee[] = [
    new Employee('Jose', 'Bergues', 'Developer', 3500),
    new Employee('Ana', 'Oviedo', 'Developer', 3900),
    new Employee('Victoria', 'Bergues', 'Developer', 4500),
    new Employee('Paula', 'Bergues', 'Developer', 13500),
    new Employee('Juan', 'Bergues', 'Developer', 55500),
  ];

  constructor() {}

  ngOnInit(): void {}

  getEmployee(index: number): Employee {
    let aEmployee: Employee;
    aEmployee = this.empleados[index];
    return aEmployee;
  }

  addEmployee(emp: Employee): void {
    this.empleados.push(emp);
  }

  updateEmployee(emp: Employee, index: number): void {
    console.log(emp);
    this.empleados[index].name = emp.name;
    this.empleados[index].surname = emp.surname;
    this.empleados[index].role = emp.role;
    this.empleados[index].salary = emp.salary;
  }

  removeEmployee(index: number): void {
    this.empleados.splice(index, 1);
  }
}
