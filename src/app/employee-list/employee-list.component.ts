import { Component } from '@angular/core';
import { FormBuilder, FormsModule,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  EmployeeForm :FormGroup
  employeeList: { empname: string; contactno: string; email: string; address: string }[] = [];

  constructor(private fb:FormBuilder){
    this.EmployeeForm = this.fb.group({
      empname:['',[Validators.required,Validators.pattern("[a-zA-Z]*")]],
      contactno:['',[Validators.required,Validators.pattern("[0-9]*")]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required,Validators.pattern("[a-zA-Z0-9,]*")]]
    })
  }
  addEmployee(){
    this.employeeList.push({empname:this.EmployeeForm.value.empname,contactno:this.EmployeeForm.value.contactno,email:this.EmployeeForm.value.email,address:this.EmployeeForm.value.address})
  }
}

