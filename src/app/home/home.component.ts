import { Component, OnInit } from '@angular/core';
import { Employee } from '../empleado.model';
import { PopupService } from '../services/messages/popup.service';
import { EmployeehandlerService } from '../services/emphandler/employeehandler.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  title = 'Employee List';
  newEmp: Employee;
  //emp: Employee = [];
  selected: boolean[] = [];
  lastSelectedToEdit: number = -1;
  editionSelected = false;

  newName!: string;
  newSurname!: string;
  newRole!: string;
  newSalary!: number;

  newNameToEdit!: string;
  newSurnameToEdit!: string;
  newRoleToEdit!: string;
  newSalaryToEdit!: number;

  constructor(
    private window: PopupService,
    protected empService: EmployeehandlerService
  ) {}

  ngOnInit() {
    this.inicSelected();
  }

  addEmployee() {
    if (this.newName != '') {
      this.window.popUp('Creando: ' + this.newName);
      this.empService.addEmployee(
        new Employee(
          this.newName,
          this.newSurname,
          this.newRole,
          this.newSalary
        )
      );
      this.selected.push(false);
      this.newName = '';
      this.newSurname = '';
      this.newRole = '';
      this.newSalary = 0;
    }
  }

  addInicEmployee(newE: Employee) {
    this.empService.addEmployee(newE);
    this.selected.push(false);
  }

  removeSelected(): void {
    this.window.popUp('Eliminando Empleados... ');
    this.empService.empleados = this.empService.empleados.filter(
      (_, index) => !this.selected[index]
    );
    this.selected = this.selected.filter((_, index) => !this.selected[index]);
    this.inicSelected();
  }

  inicSelected(): void {
    let j: number = 0;

    for (j = 0; j < this.empService.empleados.length; j++)
      this.selected[j] = false;
    console.log(this.selected);
  }

  editSelected(): void {
    this.editionSelected = true;
    this.newNameToEdit =
      this.empService.empleados[this.lastSelectedToEdit].name;
    this.newSurnameToEdit =
      this.empService.empleados[this.lastSelectedToEdit].surname;
    this.newRoleToEdit =
      this.empService.empleados[this.lastSelectedToEdit].role;
    this.newSalaryToEdit =
      this.empService.empleados[this.lastSelectedToEdit].salary;
  }

  editPerson() {
    this.empService.empleados[this.lastSelectedToEdit].name =
      this.newNameToEdit;
    this.empService.empleados[this.lastSelectedToEdit].surname =
      this.newSurnameToEdit;
    this.empService.empleados[this.lastSelectedToEdit].role =
      this.newRoleToEdit;
    this.empService.empleados[this.lastSelectedToEdit].salary =
      this.newSalaryToEdit;
    console.log(this.empService.empleados);
    this.editionSelected = false;
  }

  updateLastSelected(newEvent: string) {
    this.lastSelectedToEdit = parseInt(newEvent);
  }
}
