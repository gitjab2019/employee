import { Component, OnInit } from '@angular/core';
import { Employee } from '../empleado.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeehandlerService } from '../services/emphandler/employeehandler.service';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrl: './editempleado.component.css',
})
export class EditempleadoComponent implements OnInit {
  index: number;
  aEmp: Employee;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    protected miEmpService: EmployeehandlerService
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.aEmp = this.miEmpService.getEmployee(this.index);
  }

  updateRegister(): void {
    this.miEmpService.updateEmployee(this.aEmp, this.index);
    this.router.navigate(['']);
  }
}
