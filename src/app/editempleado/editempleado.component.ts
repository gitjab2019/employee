import { Component } from '@angular/core';

@Component({
  selector: 'app-editempleado',
  templateUrl: './editempleado.component.html',
  styleUrl: './editempleado.component.css',
})
export class EditempleadoComponent {
  newNameToEdit!: string;
  newSurnameToEdit!: string;
  newRoleToEdit!: string;
  newSalaryToEdit!: number;
}
