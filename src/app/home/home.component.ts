import { Component, OnInit } from '@angular/core';
import { Employee } from '../empleado.model';
import { PopupService } from '../services/popup.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Employee List';
  newEmp: Employee;
  emp: Employee;
  empleados: Employee[] = [];
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

  ngOnInit() {
    this.emp = new Employee('Jose', 'Bergues', 'Developer', 3500);
    this.addInicEmployee(this.emp);

    this.emp = new Employee('Ana', 'Oviedo', 'Developer', 3560);
    this.addInicEmployee(this.emp);

    this.emp = new Employee('Victoria', 'Bergues', 'Developer', 3760);
    this.addInicEmployee(this.emp);

    this.emp = new Employee('Paula', 'Bergues', 'Developer', 3898);
    this.addInicEmployee(this.emp);

    this.inicSelected();
  }

  constructor(private window: PopupService) {}

  addEmployee() {
    if (this.newName != '') {
      this.window.popUp('Craendo: ' + this.newName);
      this.empleados.push(
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
    this.empleados.push(newE);
    this.selected.push(false);
  }

  removeSelected(): void {
    this.window.popUp('Eliminando Empleados... ');
    this.empleados = this.empleados.filter((_, index) => !this.selected[index]);
    this.selected = this.selected.filter((_, index) => !this.selected[index]);
    this.inicSelected();
  }

  inicSelected(): void {
    let j: number = 0;

    for (j = 0; j < this.empleados.length; j++) this.selected[j] = false;
    console.log(this.selected);
  }

  editSelected(): void {
    this.editionSelected = true;
    this.newNameToEdit = this.empleados[this.lastSelectedToEdit].name;
    this.newSurnameToEdit = this.empleados[this.lastSelectedToEdit].surname;
    this.newRoleToEdit = this.empleados[this.lastSelectedToEdit].role;
    this.newSalaryToEdit = this.empleados[this.lastSelectedToEdit].salary;
  }

  editPerson() {
    this.empleados[this.lastSelectedToEdit].name = this.newNameToEdit;
    this.empleados[this.lastSelectedToEdit].surname = this.newSurnameToEdit;
    this.empleados[this.lastSelectedToEdit].role = this.newRoleToEdit;
    this.empleados[this.lastSelectedToEdit].salary = this.newSalaryToEdit;
    console.log(this.empleados);
    this.editionSelected = false;
  }

  updateLastSelected(newEvent: string) {
    this.lastSelectedToEdit = parseInt(newEvent);
  }
}
