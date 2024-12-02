// import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

export const routes: Routes = [
    { path: "", component: EmployeeLoginComponent },
    { path: "employees", component: EmployeeListComponent }
];