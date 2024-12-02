import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent {
  EmployeeLoginForm : FormGroup
  
  constructor(private fb:FormBuilder){
    this.EmployeeLoginForm = this.fb.group({
      username:['',[Validators.required,Validators.pattern("touchworld")]],
      password:['',[Validators.required,Validators.pattern("touchworldTech")]]
    })
  }
}
